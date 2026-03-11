import { combineReducers } from "redux";
import authReducer from "./Reducer/authReducer";
import { stateReducer } from "./Reducer/stateReducer";
import { languageReducer } from "./Reducer/languageReducer";

const rootReducer = combineReducers({
  login: authReducer,
  state: stateReducer,
  language:languageReducer,
});

export default rootReducer;