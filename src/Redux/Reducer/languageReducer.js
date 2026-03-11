import { languageActionTypes } from "../Constant/languageConstant";

const initialState = {
  data: "",
  loading: false,
  error: "",
  added: false,
  editable: false,
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    // List
    case languageActionTypes.LANGUAGE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case languageActionTypes.LANGUAGE_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case languageActionTypes.LANGUAGE_LIST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        data: "",
        error: action.payload,
      };



    // Add
   case languageActionTypes.LANGUAGE_AAD_REQUEST:
    return{
      ...state,
      added:true,
      error:"",
    };
    case languageActionTypes.LANGUAGE_AAD_REQUEST_SUCCESS:
      return{
        ...state,
        added:false,
        data:action.payload,
        error:"",
      };

    case languageActionTypes.LANGUAGE_ADD_REQUEST_FAILURE:
      return{
        ...state,
        add:false,
        error:action.payload,
        data:"",
      };

    // Edit
    case languageActionTypes.LANGUAGE_EDIT_REQUEST:
      return {
        ...state,
        editable: true,
        data: "",
        error: "",
      };
    case languageActionTypes.LANGUAGE_EDIT_REQUEST_SUCCESS:
      return {
        ...state,
        editable: false,
        data: action.payload,
        error: "",
      };
    case languageActionTypes.LANGUAGE_EDIT_REQUEST_FAILURE:
      return {
        ...state,
        editable: false,
        data: "",
        error: action.payload,
      };
    default:
      return state;
  }
};
