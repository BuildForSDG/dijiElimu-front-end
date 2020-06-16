import errorActionTypes from './error-action-types';


const INITIAL_STATE = {
  errorResponse: null,
  errorModalHidden: true,
};
const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case errorActionTypes.SET_ERROR_AND_STATUS:
      return {
        ...state,
        errorResponse: action.payload,
      };
    case errorActionTypes.SHOW_ERROR_MODAL:
      return {
        ...state,
        errorModalHidden: false}

    case errorActionTypes.HIDE_ERROR_MODAL:
      return {
        ...state,
        errorModalHidden: true
      }
    default:
      return state;
  }
};

export default errorReducer;
