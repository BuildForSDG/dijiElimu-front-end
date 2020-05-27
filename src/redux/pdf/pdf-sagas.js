import {
  takeLatest, all, call, put
} from 'redux-saga/effects';
import axios from 'axios';
import pdfActionTypes from './pdf-action-types';
import {
  fetchPdfSuccess,
  createPdfFailure,
  createPdfSuccess,
  deletePdfFailure,
  deletePdfSuccess,
  updatePdfFailure,
  updatePdfSuccess
} from './pdf-actions';


// fetch pdf saga
function* fetchPdfWorker(action) {
  const { payload } = action;
  try {
    const pdf = yield axios.get(`https://www.dijielimuAPI.com/courses/:${payload}`);
    yield put(fetchPdfSuccess(pdf));
  } catch (error) {
    yield put(fetchPdfSuccess(error));
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
    yield put(call(createPdfFailure, error));
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
    yield put(call(deletePdfFailure, error));
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
    yield put(call(updatePdfFailure, error));
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
