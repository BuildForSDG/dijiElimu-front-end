import { createSelector } from 'reselect';

const selectUnitState = (state) => state.unit;

export const selectUnit = createSelector([selectUnitState], ({ unit }) => unit);

export const selectUnitIsLoading = createSelector([selectUnit], (unit) => !!unit);

export const selectCreateUnitHidden = createSelector([selectUnitState], 
    (unit) => unit.createUnitHidden);

export const selectComponentIsCreating = createSelector([selectUnitState], 
    (unit) => unit.isCreatingUnit);
export const selectComponentIsUpdating = createSelector([selectUnitState], 
    (unit) => unit.isUpdatingUnit);
