import errorActionTypes from './error-action-types';


const INITIAL_STATE = {
  error: null
};
const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case errorActionTypes.SET_ERROR_AND_STATUS:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default errorReducer;
