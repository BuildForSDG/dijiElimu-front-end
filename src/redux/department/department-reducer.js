import departmentActionTypes from './department-action-types';

const INITIAL_STATE = {
  departments: [],
  error: null,
  fullDepartment: null,
  isCreating: false,
  isUpdating: false,
  createDepartmentHidden: true,
};
const departmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case departmentActionTypes.FETCH_DEPARTMENT_SUCCESS:
      return {
        ...state,
        fullDepartment: action.payload
      };
    case departmentActionTypes.FETCH_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        departments: action.payload
      };
    case departmentActionTypes.FETCH_DEPARTMENTS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case departmentActionTypes.CREATE_DEPARTMENTS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case departmentActionTypes.CREATE_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fullDepartment: action.payload
      };
   
    case departmentActionTypes.TOGGLE_COMPONENT_TO_CREATE:
      return {
        ...state,
        isCreating: true,
        isUpdating: false
      }
    case departmentActionTypes.TOGGLE_COMPONENT_TO_UPDATE:
      return {
        ...state,
        isCreating: false,
        isUpdating: true
      }
    case departmentActionTypes.RESET_CREATE_COMPONENT:
      return {
        ...state,
        isCreating: false,
        isUpdating: false
      }
    case departmentActionTypes.TOGGLE_CREATE_DEPARTMENT_HIDDEN:
      return {
        ...state,
        createDepartmentHidden: !state.createDepartmentHidden
      }
      case departmentActionTypes.HIDE_CREATE_COMPONENT:
        return {
          ...state,
          createDepartmentHidden: true
        }
    default:
      return state;
  }
};
export default departmentReducer;
