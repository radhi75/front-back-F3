import { ALERT_ERROR, CLEAR_ERROR } from "../ActionTypes/errorTypes";

const initialState = [];

const errorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALERT_ERROR:
      return [...state, payload];
    case CLEAR_ERROR:
      return state.filter((el) => el.id !== payload);

    default:
      return state;
  }
};

export default errorsReducer;
