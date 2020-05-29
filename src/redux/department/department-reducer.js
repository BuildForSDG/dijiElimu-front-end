import departmentActionTypes from './department-action-types';
import departments from '../../mydata.json';

const INITIAL_STATE = {
  departments: departments.departments,
  isLoading: false,
  error: null,
  fullDepartment: null
};
const departmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case departmentActionTypes.FETCH_DEPARTMENTS_START:
      return {
        ...state,
        isLoading: true
      };
    case departmentActionTypes.FETCH_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        departments: action.payload
      };
    case departmentActionTypes.FETCH_DEPARTMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
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
