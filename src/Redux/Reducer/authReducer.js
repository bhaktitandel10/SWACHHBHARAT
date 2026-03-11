import { authActionTypes } from "../Constant/authConstant";

const initialState = {
  loading: false,
  loginStatus: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case authActionTypes.LOGIN_REQUEST_SUCESS:
      return {
        ...state,
        loading: false,
        loginStatus: true,   // ⭐ VERY IMPORTANT
        user: action.payload,
      };

    case authActionTypes.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        loginStatus: false,
        error: action.payload,
      };

    case authActionTypes.LOGOUT_REQUEST_SUCESS:
      return {
        ...state,
        loginStatus: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;