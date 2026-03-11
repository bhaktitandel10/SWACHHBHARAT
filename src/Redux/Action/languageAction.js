import { languageActionTypes } from "../Constant/languageConstant";

// List Request
export const languageListRequest = () => ({
    type: languageActionTypes.LANGUAGE_LIST_REQUEST
});

export const languageListSuccess = (payload) => ({
    type: languageActionTypes.LANGUAGE_LIST_REQUEST_SUCCESS,
    payload
});

export const languageListFailure = (payload) => ({
    type: languageActionTypes.LANGUAGE_LIST_REQUEST_FAILURE,
    payload
});



// Add Request
export const languageAddRequest = () => ({
    type: languageActionTypes.LANGUAGE_ADD_REQUEST    
});

export const languageAddSuccess = (payload) => ({
    type: languageActionTypes.LANGUAGE_ADD_REQUEST_SUCCESS,
    payload
});

export const languageAddFailure = (payload) => ({
    type: languageActionTypes.LANGUAGE_ADD_REQUEST_FAILURE,
    payload
});



// Edit Request
export const languageEditRequest = () => ({
    type: languageActionTypes.LANGUAGE_EDIT_REQUEST
});

export const languageEditSuccess = (payload) => ({
    type: languageActionTypes.LANGUAGE_EDIT_REQUEST_SUCCESS,
    payload
});

export const languageEditFailure = (payload) => ({
    type: languageActionTypes.LANGUAGE_EDIT_REQUEST_FAILURE,
    payload
});
