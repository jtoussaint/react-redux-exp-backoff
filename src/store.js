import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { createLogger } from "redux-logger";

const defaultState = {
  areas: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_LINE":
      return {
        areas: state.areas.push(action.payload)
      };
    case "GET_AREAS":
      return {
        areas: action.payload ? action.payload : []
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  defaultState,
  applyMiddleware(promiseMiddleware, createLogger())
);

export default store;
