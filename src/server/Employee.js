import api from "./Api";

export const getEmployeeFromApi = (page = 1) => {
  return api.get(`/users?page=${page}`);
};
