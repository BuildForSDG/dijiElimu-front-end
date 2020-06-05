import { createSelector } from 'reselect';

const selectErrorState = (state) => state.error;

export const selectError = createSelector([selectErrorState], (error) => error.error);
