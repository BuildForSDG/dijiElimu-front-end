import {
  takeLatest, all, call, put, delay
} from 'redux-saga/effects';
import axios from '../axios';
import unitActionTypes from './unit-action-types';
import { fetchUnitSuccess, fetchUnitFailure } from './unit-actions';
import { units } from '../../units.json';


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
  const { payload: { unitCode, history } } = action;
  delay(3000);
  try {
    // const unit = yield axios.get(`https://www.dijielimuAPI.com/courses/:${unitCode}`);
    const unit = selectUnit(units, unitCode);

    yield put(fetchUnitSuccess(unit));
    // yield history.push(`/units/${unit.code}`)
  } catch (error) {
    yield put(fetchUnitFailure(error));
    yield put(history.push('/error'));
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
    const { status, body } = response;
    yield put(call(fetchUnitSuccess, body));
    yield history.push(`/unit/${body.code}`);
  } catch (error) {
    yield put(fetchUnitFailure(error));
    yield put(history.push('/error'));
  }
}
export function* createUnitWatcher() {
  yield takeLatest(unitActionTypes.CREATE_UNIT_START, createUnitWorker);
}
export function* unitSagas() {
  yield all([
    call(fetchUnitWatcher)
  ]);
}
