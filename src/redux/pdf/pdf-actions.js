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
export const startDeletePdf = (payload) => ({
  type: pdfActionTypes.DELETE_PDF_START,
  payload: payload
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
export const startUpdatePdf = (payload) => ({
  type: pdfActionTypes.UPDATE_PDF_START,
  payload: payload
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

//MISCELANEOUS ACTIONS


  export const togglePdfComponentToCreate = () => ({
    type: pdfActionTypes.TOGGLE_PDF_COMPONENT_TO_CREATE
  });

  export const togglePdfComponentToUpdate = () => ({
    type: pdfActionTypes.TOGGLE_PDF_COMPONENT_TO_UPDATE
  });

  export const hideCreatePdfComponent = () => ({
    type: pdfActionTypes.HIDE_CREATE_PDF_COMPONENT
  })
  
  export const toggleCreatePdfHidden = () => ({
    type: pdfActionTypes.TOGGLE_CREATE_PDF_HIDDEN

  })
  