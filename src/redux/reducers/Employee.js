import * as Types from "./../actions/ActionTypes";

const initialState = {
  isFetching: false,
  employees: [],
  met: [],
  total_pages: 1,
};

export const employees = (state = initialState, action) => {
  switch (action.type) {
    case Types.REQUEST_EMPLOYEES:
      return { ...state, isFetching: true };
    case Types.RECEIVE_EMPLOYEES:
      return {
        ...state,
        isFetching: false,
        employees: action.payload.data,
        total_pages: action.payload.total_pages,
      };
    case Types.MET_EMPLOYEES:
      if (state.met[action.payload.id] === undefined) {
        return {
          ...state,
          met: { ...state.met, [action.payload.id]: action.payload },
          isFetching: false,
        };
      } else {
        return {
          ...state,
          met: { ...state.met, [action.payload.id]: undefined },
          isFetching: false,
        };
      }

    default:
      return state;
  }
};
