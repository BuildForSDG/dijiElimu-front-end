import {
  takeLatest, all, call, put, delay
} from 'redux-saga/effects';
import axios from '../axios';
import unitActionTypes from './unit-action-types';
import { fetchUnitSuccess, updateUnitSuccess, deleteUnitSuccess,  } from './unit-actions';
import { units } from '../../units.json';
import { foundError, showErrorModal } from '../error/error-actions';


function selectUnit(unitsArray, unitCode) {
  let unitt;
  unitsArray.forEach((unit) => {
    if (unit.code === unitCode) {
      unitt = unit;
    }
  });
  return unitt;
}
function* fetchUnitWorker(action) {
  const { payload: { unitCode } } = action;
  delay(3000);
  try {
    // const unit = yield axios.get(`https://www.dijielimuAPI.com/courses/:${unitCode}`);
    const unit = selectUnit(units, unitCode);

    yield put(fetchUnitSuccess(unit));
    // yield history.push(`/units/${unit.code}`)
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* fetchUnitWatcher() {
  yield takeLatest(unitActionTypes.FETCH_UNIT_START, fetchUnitWorker);
}
// create unit sagas
function* createUnitWorker(action) {
  const { payload: { unitDetails, history } } = action;
  try {
    const response = yield axios.post('/units', { ...unitDetails });
    const { data } = response;
    yield put(fetchUnitSuccess( data));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}
export function* createUnitWatcher() {
  yield takeLatest(unitActionTypes.CREATE_UNIT_START, createUnitWorker);
}
// update unit sagas
function* updateUnitWorker(action) {
  const { payload: { unitDetails, history, unitId } } = action;
  try {
    const response = yield axios.patch(`/units/:${unitId}`, unitDetails);
    const unit = response.data
    yield put(updateUnitSuccess(unit));
    yield history.push(`/unit/${unitId}`);
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}
export function* updateUnitWatcher() {
  yield takeLatest(unitActionTypes.UPDATE_UNIT_START, updateUnitWorker);
}

// delete unit 

function* deleteUnitWorker(action) {
  const { payload: { unitId } } = action;
  try {
    const response = yield axios.delete(`/units/:${unitId}`);
    const unit = response.data
    yield put(deleteUnitSuccess(unit));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}
export function* deleteUnitWatcher() {
  yield takeLatest(unitActionTypes.DELETE_UNIT_START, deleteUnitWorker);
}
// unit sagas
export function* unitSagas() {
  yield all([
    call(fetchUnitWatcher),
    call(deleteUnitWatcher),
    call(createUnitWatcher),
    call(updateUnitWatcher),
  ]);
}
