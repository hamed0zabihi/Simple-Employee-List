import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";
import { fetchEmployees } from "./../actions/Employee";
//for reduxDevTools Extesion Browser
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const Store = createStore(
  reducers,
  compose(applyMiddleware(thunk), reduxDevTools)
);
//
Store.dispatch(fetchEmployees());
//subscribe
Store.subscribe(() => console.log(Store.getState()));
