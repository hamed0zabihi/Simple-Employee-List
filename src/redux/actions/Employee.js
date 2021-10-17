import * as Types from "./ActionTypes";
import { getEmployeeFromApi } from "./../../server/Employee";

export const fetchEmployees = (page = 1) => {
  return async (dispatch) => {
    await dispatch({ type: Types.REQUEST_EMPLOYEES });
    try {
      const { data, status } = await getEmployeeFromApi(page);
      if (status === 200) {
        await dispatch({ type: Types.RECEIVE_EMPLOYEES, payload: data });
      }
    } catch (error) {
      console.log("api request error", error);
    }
  };
};

export const toggleMet = (employee) => {
  return async (dispatch) => {
    await dispatch({ type: Types.MET_EMPLOYEES, payload: employee });
    //send toggleMet data to api,below
    // TODO
  };
};
