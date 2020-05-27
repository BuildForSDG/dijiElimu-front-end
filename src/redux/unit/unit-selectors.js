import { createSelector } from 'reselect';

const selectUnitState = (state) => state.unit;

export const selectUnit = createSelector([selectUnitState], ({ unit }) => unit);

export const selectUnitIsLoading = createSelector([selectUnit], (unit) => (unit ? !!unit : true));
