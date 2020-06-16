import unitActionTypes from './unit-action-types';

const INITIAL_STATE = {
  unit: null,
  isLoading: false,
  error: null,
  createUnitHidden: true,
  isCreatingUnit: false,
  isUpdatingUnit: false
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
    case unitActionTypes.TOGGLE_CREATE_UNIT_HIDDEN:
      return {
        ...state,
        createUnitHidden: !state.createUnitHidden
      };
    case unitActionTypes.TOGGLE_TO_CREATE_UNIT:
      return {
        ...state,
        isCreatingUnit: true,
        isUpdatingUnit: false
      };
    case unitActionTypes.TOGGLE_TO_UPDATE_UNIT:
      return {
        ...state,
        isCreatingUnit: false,
        isUpdatingUnit: true
      };
    case unitActionTypes.TOGGLE_TO_RESET_COMPONENT:
      return {
        ...state,
        isCreatingUnit: false,
        isUpdatingUnit: false
      };
    case unitActionTypes.HIDE_CREATE_UNIT_COMPONENT:
      return {
        ...state,
        createUnitHidden: true
      }
    default:
      return state;
  }
};

export default unitReducer;
