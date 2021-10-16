import { combineReducers } from "redux";
import { employees } from "./Employee";

export const reducers = combineReducers({
  employees: employees,
});
