import errorActionTypes from './error-action-types';



export const showErrorModal = () => ({
  type: errorActionTypes.SHOW_ERROR_MODAL
})

export const hideErrorModal = () => ({
  type: errorActionTypes.HIDE_ERROR_MODAL
})

export const foundError = (payload) => ({
  type: errorActionTypes.SET_ERROR_AND_STATUS,
  payload
})



