import unitActionTypes from './unit-action-types';

const INITIAL_STATE = {
  unit: null,
  isLoading: false,
  error: null
};
const unitReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case unitActionTypes.FETCH_UNIT_START:
      return {
        ...state,
        isLoading: true
      };
    case unitActionTypes.FETCH_UNIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        unit: action.payload
      };
    case unitActionTypes.FETCH_UNIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default unitReducer;
