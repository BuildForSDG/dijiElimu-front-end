import pdfActionTypes from './pdf-action-types';

const INITIAL_STATE = {
  pdf: null,
  isLoading: false,
  error: null,
  createPdfHidden: true,
  isCreating: false,
  isUpdating: false
};
const pdfReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pdfActionTypes.FETCH_PDF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        course: action.payload
      };
    case pdfActionTypes.TOGGLE_PDF_COMPONENT_TO_CREATE:
      return {
        ...state,
        isCreating: true,
        isUpdating: false
      };
    case pdfActionTypes.TOGGLE_PDF_COMPONENT_TO_UPDATE:
      return {
        ...state,
        isCreating: false,
        isUpdating:  true
      };
    case pdfActionTypes.TOGGLE_CREATE_PDF_HIDDEN:
      return {
        ...state,
        createPdfHidden: !state.createPdfHidden
      };
    case pdfActionTypes.HIDE_CREATE_PDF_COMPONENT:
      return {
          ...state,
        createPdfHidden: true
        };
      case pdfActionTypes.SHOW_CREATE_PDF_COMPONENT:
        return {
          ...state,
          createPdfHidden: false
        };
    default:
      return state;
  }
};

export default pdfReducer;
