import departmentActionTypes from './department-action-types';
import departments from '../../mydata.json';

const INITIAL_STATE = {
  departments: departments.departments,
  error: null,
  fullDepartment: null
};
const departmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case departmentActionTypes.FETCH_DEPARTMENTS_START:
      return {
        ...state
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
    case departmentActionTypes.SELECT_DEPARTMENT_FROM_PREVIEW:
      return {
        ...state,
        fullDepartment: state.departments.find((department) => department.code === action.payload)
      };
    default:
      return state;
  }
};
export default departmentReducer;
