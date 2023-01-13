import axios from "axios";
import { GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/authTypes";
export const register = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/user/register", data);
    dispatch({ type: REGISTER, payload: res.data });
    navigate("/profile");
  } catch (error) {
    console.log(error);
  }
};
export const login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/user/login", data);
    dispatch({ type: LOGIN, payload: res.data });
    navigate("/profile");
  } catch (error) {
    console.log(error);
  }
};
export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/user/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const logout = () => {
  return { type: LOGOUT };
};
