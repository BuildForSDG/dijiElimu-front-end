import { createSelector } from 'reselect';


export const selectPdfState = (state) => state.pdf;

export const selectPdf = createSelector([selectPdfState], (pdfState) => pdfState.pdf);

export const selectCreatePdfHidden = createSelector([selectPdfState], (pdfState) => {
    return pdfState.createPdfHidden
}
)

export const selectCreatePdfIsCreating = createSelector([selectPdfState], (pdfState) => {
    return pdfState.isCreating
}
)
export const selectCreatePdfIsUpdating = createSelector([selectPdfState], (pdfState) => {
    return pdfState.isUpdating
}
)
