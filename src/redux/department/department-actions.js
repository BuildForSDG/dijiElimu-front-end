import departmentActionTypes from './department-action-types';

export const fetchDepartmentsStart = () => ({
  type: departmentActionTypes.FETCH_DEPARTMENTS_START
});

export const fetchDepartmentsSuccess = (departments) => ({
  type: departmentActionTypes.FETCH_DEPARTMENTS_SUCCESS,
  payload: departments
});
//fetch single department

export const fetchDepartmentStart = (payload) => ({
  type: departmentActionTypes.FETCH_DEPARTMENT_START,
  payload
});

export const fetchDepartmentSuccess = (departments) => ({
  type: departmentActionTypes.FETCH_DEPARTMENT_SUCCESS,
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
// updating department actions
export const updateDepartmentsStart = (departmentDetails) => ({
  type: departmentActionTypes.UPDATE_DEPARTMENTS_START,
  payload: departmentDetails
});

export const updateDepartmentsSuccess = (department) => ({
  type: departmentActionTypes.UPDATE_DEPARTMENTS_SUCCESS,
  payload: department
});

export const updateDepartmentsFailure = (error) => ({
  type: departmentActionTypes.UPDATE_DEPARTMENTS_FAILURE,
  payload: error
});
export const selectDepartmentFromPreview = (id) => ({
  type: departmentActionTypes.SELECT_DEPARTMENT_FROM_PREVIEW,
  payload: id
});

// toggle create component
export const toggleDepComponentToCreate = () =>({
  type: departmentActionTypes.TOGGLE_COMPONENT_TO_CREATE
})

export const toggleDepComponentToUpdate = () => ({
  type: departmentActionTypes.TOGGLE_COMPONENT_TO_UPDATE
})
export const resetDepCreateComponent = () => ({
  type: departmentActionTypes.RESET_CREATE_COMPONENT
})

export const toggleCreateDepartmentHidden = () => ({
  type: departmentActionTypes.TOGGLE_CREATE_DEPARTMENT_HIDDEN
})

export const hideCreateComponent = () => ({
  type: departmentActionTypes.HIDE_CREATE_COMPONENT
})


