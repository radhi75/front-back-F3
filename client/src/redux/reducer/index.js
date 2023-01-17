import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";

const rootReducer = combineReducers({ authReducer, errorsReducer });

export default rootReducer;
