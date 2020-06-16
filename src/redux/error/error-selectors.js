import { createSelector } from 'reselect';

const selectErrorState = (state) => state.error;

export const selectError = createSelector([selectErrorState], (error) =>{
    return error.errorResponse
});


export const selectErrorModalHidden = createSelector([selectErrorState], (state) => {
    return state.errorModalHidden
}
)
