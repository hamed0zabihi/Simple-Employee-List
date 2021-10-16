import * as Types from "./ActionTypes";
import { getEmployeeFromApi } from "./../../server/Employee";

export const fetchEmployees = (page = 1) => {
  return async (dispatch) => {
    await dispatch({ type: Types.REQUEST_EMPLOYEES });
    const { data, status } = await getEmployeeFromApi(page);
    if (status === 200) {
      await dispatch({ type: Types.RECEIVE_EMPLOYEES, payload: data });
    }
  };
};
