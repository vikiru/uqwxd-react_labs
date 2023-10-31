import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore } from "redux";
import myReducers from "./reducers";
//Create the store
const myStore = createStore(myReducers);
//This will console log the current state everytime the state changes
myStore.subscribe(() => console.log(myStore.getState()));
//Enveloping the App inside the Provider, ensures that the states in the store are available
//throughout the application
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
