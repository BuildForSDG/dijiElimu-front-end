import { createSelector } from 'reselect';

const selectDepartment = (state) => state.department;

export const selectDepartments = createSelector([selectDepartment],
  ({ departments }) => departments);

export const selectFullDepartment = createSelector([selectDepartment],
  (department) => department.fullDepartment);

export const selectCreateDepartmentHidden = createSelector([selectDepartment], (department) => {
  return department.createDepartmentHidden
}
)

export const selectDepComponentIsCreating = createSelector([selectDepartment], (department) => {
  return department.isCreating
}
)
export const selectDepComponentIsUpdating = createSelector([selectDepartment], (department) => {
  return department.isUpdating
}
)

export const selectDepartmentIsLoading = createSelector([selectFullDepartment],
  (dept) => !!dept);
