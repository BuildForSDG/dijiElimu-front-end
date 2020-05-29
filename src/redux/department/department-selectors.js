import { createSelector } from 'reselect';

const selectDepartment = (state) => state.department;

export const selectDepartments = createSelector([selectDepartment],
  ({ departments }) => departments);
export const selectFullDepartment = createSelector([selectDepartment],
  (department) => department.fullDepartment);
