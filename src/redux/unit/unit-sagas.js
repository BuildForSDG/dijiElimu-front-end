import {
  takeLatest, all, call, put
} from 'redux-saga/effects';
import axios from 'axios';
import unitActionTypes from './unit-action-types';
import { fetchUnitSuccess } from './unit-actions';

function* fetchUnitWorker(action) {
  const { payload } = action;
  try {
    const unit = yield axios.get(`https://www.dijielimuAPI.com/courses/:${payload}`);
    yield put(call(fetchUnitSuccess, unit));
  } catch (error) {
    yield put(fetchUnitSuccess(error));
  }
}

export function* fetchUnitWatcher() {
  yield takeLatest(unitActionTypes.FETCH_UNIT_START, fetchUnitWorker);
}

export function* unitSagas() {
  yield all([
    call(fetchUnitWatcher)
  ]);
}
