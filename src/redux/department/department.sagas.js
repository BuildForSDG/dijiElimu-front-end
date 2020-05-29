import {
  call, all, takeLatest, put
} from 'redux-saga/effects';
import axios from 'axios';
import { fetchDepartmentsSuccess, fetchDepartmentsFailure } from './department-actions';

import departmentActionTypes from './department-action-types';

function* fetchDepartmentsWorker() {
  try {
    const departments = yield axios.get('https://www.dijielimu.com/departments');
    yield put(call(fetchDepartmentsSuccess, departments));
  } catch (error) {
    yield put(call(fetchDepartmentsFailure, error));
  }
}

export function* fetchDepartmentsStart() {
  yield takeLatest(departmentActionTypes.FETCH_DEPARTMENTS_START, fetchDepartmentsWorker);
}

export function* departmentSagas() {
  yield all([
    call(fetchDepartmentsStart)
  ]);
}
