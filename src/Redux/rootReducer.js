// A Redux app really only has one reducer function: the "root reducer" function
// that you will pass to createStore later on. That one root reducer function is
// responsible for handling all of the actions that are dispatched, and
// calculating what the entire new state result should be every time.

import { combineReducers } from "redux";
import authReducer from "./Reducer/authReducer";
import { stateReducer } from "./Reducer/stateReducer";

// The resulting combined reducer calls every slice reducer any time an action is dispatched,
// and gathers their results into a single state object.
// This enables splitting up reducer logic into separate functions,
// each managing their own slice of the state independently.
const appReducer = combineReducers({
  login: authReducer,
  
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
