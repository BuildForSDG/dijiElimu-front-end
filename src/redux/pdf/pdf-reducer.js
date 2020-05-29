import pdfActionTypes from './pdf-action-types';

const INITIAL_STATE = {
  pdf: null,
  isLoading: false,
  error: null
};
const pdfReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pdfActionTypes.FETCH_PDF_START:
      return {
        ...state,
        isLoading: true
      };
    case pdfActionTypes.FETCH_PDF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        course: action.payload
      };
    case pdfActionTypes.FETCH_PDF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default pdfReducer;
