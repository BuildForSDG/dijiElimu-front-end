import departmentActionTypes from './department-action-types';

export const fetchDepartmentsStart = () => ({
  type: departmentActionTypes.FETCH_DEPARTMENTS_START
});

export const fetchDepartmentsSuccess = (departments) => ({
  type: departmentActionTypes.FETCH_DEPARTMENTS_SUCCESS,
  payload: departments
});

export const fetchDepartmentsFailure = (error) => ({
  type: departmentActionTypes.FETCH_DEPARTMENTS_FAILURE,
  payload: error
});
// CREATE ACTIONS
export const createDepartmentsStart = (departmentDetails) => ({
  type: departmentActionTypes.CREATE_DEPARTMENTS_START,
  payload: departmentDetails
});

export const createDepartmentsSuccess = (department) => ({
  type: departmentActionTypes.CREATE_DEPARTMENTS_SUCCESS,
  payload: department
});

export const createDepartmentsFailure = (error) => ({
  type: departmentActionTypes.CREATE_DEPARTMENTS_FAILURE,
  payload: error
});
export const selectDepartmentFromPreview = (id) => ({
  type: departmentActionTypes.SELECT_DEPARTMENT_FROM_PREVIEW,
  payload: id
});
