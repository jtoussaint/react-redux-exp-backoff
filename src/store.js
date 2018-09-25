import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { createLogger } from "redux-logger";

const defaultState = {
  areas: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_LINE":
      const updatedAreas = state.areas.map(a => {
        if (a.id === action.payload.areaId) {
          a.lines.push(action.payload.line);
        }

        return a;
      });

      return {
        areas: updatedAreas
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
