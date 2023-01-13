import { GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/authTypes";

const initialState = {
  user: {},
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.users };
    case GET_CURRENT:
      return { ...state, user: payload.users };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null };
    default:
      return state;
  }
};
export default authReducer;
