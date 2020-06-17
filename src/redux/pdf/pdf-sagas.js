import {
  takeLatest, all, call, put
} from 'redux-saga/effects';
import axios from 'axios';
import pdfActionTypes from './pdf-action-types';
import {
  fetchPdfSuccess,
  createPdfSuccess,
  deletePdfSuccess,
  updatePdfSuccess
} from './pdf-actions';
import { foundError, showErrorModal } from '../error/error-actions';


// fetch pdf saga
function* fetchPdfWorker(action) {
  const { payload } = action;
  try {
    const pdf = yield axios.get(`https://www.dijielimuAPI.com/courses/:${payload}`);
    yield put(fetchPdfSuccess(pdf));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* fetchPdfWatcher() {
  yield takeLatest(pdfActionTypes.FETCH_PDF_START, fetchPdfWorker);
}

// create pdf sagas
function* createPdfWorker(action) {
  const { payload } = action;
  try {
    const pdf = yield axios.get(`https://www.dijielimuAPI.com/courses/:${payload}`);
    yield put(call(createPdfSuccess, pdf));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* createPdfWatcher() {
  yield takeLatest(pdfActionTypes.DELETE_PDF_START, createPdfWorker);
}
// delete course sagas
function* deletePdfWorker(action) {
  const { payload } = action;
  try {
    const pdf = yield axios.get(`https://www.dijielimuAPI.com/courses/:${payload}`);
    yield put(call(deletePdfSuccess, pdf));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* deletePdfWatcher() {
  yield takeLatest(pdfActionTypes.DELETE_PDF_START, deletePdfWorker);
}
// UPDATE pdf SAGAS
function* updatePdfWorker(action) {
  const { payload } = action;
  try {
    const pdf = yield axios.get(`https://www.dijielimuAPI.com/courses/:${payload}`);
    yield put(call(updatePdfSuccess, pdf));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* updatePdfWatcher() {
  yield takeLatest(pdfActionTypes.UPDATE_PDF_START, updatePdfWorker);
}
// pdfs root saga
export function* pdfSagas() {
  yield all([
    call(fetchPdfWatcher),
    call(deletePdfWatcher),
    call(updatePdfWatcher),
    call(createPdfWatcher)
  ]);
}
