import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import errors from "./errors";
import setting from "./admin/setting";
import socialSetting from "./admin/socialSetting";

export default combineReducers({
  auth,
  alert,
  errors,
  setting,
  socialSetting,
});
