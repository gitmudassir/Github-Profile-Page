import { combineReducers } from "redux";
import { profile, repositories } from "./profile.reducer";

const rootReducer = combineReducers({
  profile,
  repositories
});

export default rootReducer;
