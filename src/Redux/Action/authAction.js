import { authActionTypes } from "../Constant/authConstant";

export function loginRequestAction(state,action){
  return {
    type:authActionTypes.LOGIN_REQUEST,
  };
}

export function loginRequestSucess(action){
  return{
    type:authActionTypes.LOGIN_REQUEST_SUCESS,
    payload:action,
  };
}

export function loginRequestFail(state,action){
  return{
    type:authActionTypes.LOGIN_REQUEST_FAIL,
    payload:action?.payload,
  }
}

export function logoutRequestAction(state, action) {
  return {
    type: authActionTypes.LOGOUT_REQUEST,
  };
}

export function logoutRequestSucess(state, action) {
  return {
    type: authActionTypes.LOGOUT_REQUEST_SUCESS,
    payload: action?.payload,
  };
}
