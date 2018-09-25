import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import { getAreas } from "./areas/actions";
import AreaList from "./areas/area-list";

import "./styles.css";

const App = () => (
  <Provider store={store}>
    <AreaList />
  </Provider>
);

store.dispatch(getAreas());

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
