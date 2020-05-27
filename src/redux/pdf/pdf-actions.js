import pdfActionTypes from './pdf-action-types';

export const startFetchPdf = (pdfCode) => ({
  type: pdfActionTypes.FETCH_PDF_START,
  payload: pdfCode
}
);
export const fetchPdfSuccess = (pdf) => ({
  type: pdfActionTypes.FETCH_PDF_START,
  payload: pdf
}
);
export const fetchPdfFailure = (error) => ({
  type: pdfActionTypes.FETCH_PDF_FAILURE,
  payload: error
});

// CREATE pdf
export const startCreatePdf = (pdf) => ({
  type: pdfActionTypes.CREATE_PDF_START,
  payload: pdf
}
);
export const createPdfSuccess = (pdf) => ({
  type: pdfActionTypes.CREATE_PDF_START,
  payload: pdf
}
);
export const createPdfFailure = (error) => ({
  type: pdfActionTypes.CREATE_PDF_FAILURE,
  payload: error
});
// DELETE
export const startDeletePdf = (pdfCode) => ({
  type: pdfActionTypes.DELETE_PDF_START,
  payload: pdfCode
}
);
export const deletePdfSuccess = (pdf) => ({
  type: pdfActionTypes.DELETE_PDF_START,
  payload: pdf
}
);
export const deletePdfFailure = (error) => ({
  type: pdfActionTypes.DELETE_PDF_FAILURE,
  payload: error
});
// update course
export const startUpdatePdf = (pdfCode) => ({
  type: pdfActionTypes.UPDATE_PDF_START,
  payload: pdfCode
}
);
export const updatePdfSuccess = (pdf) => ({
  type: pdfActionTypes.UPDATE_PDF_START,
  payload: pdf
}
);
export const updatePdfFailure = (error) => ({
  type: pdfActionTypes.UPDATE_PDF_FAILURE,
  payload: error
});
