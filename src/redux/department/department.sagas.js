import {
  call, all, takeLatest, put
} from 'redux-saga/effects';
import axios from '../axios';
import { fetchDepartmentsSuccess, fetchDepartmentsFailure } from './department-actions';

import departmentActionTypes from './department-action-types';

function* fetchDepartmentsWorker() {
  try {
    const response = yield axios.get('departments');
    const departments = response.data;
    yield put(fetchDepartmentsSuccess, departments);
  } catch (error) {
    yield put(call(fetchDepartmentsFailure, error));
  }
}

export function* fetchDepartmentsStart() {
  yield takeLatest(departmentActionTypes.FETCH_DEPARTMENTS_START, fetchDepartmentsWorker);
}

// create Departments
function* createDepartmentWorker(action) {
  const { payload: { departmentDetails } } = action;
  try {
    const response = yield axios.post('departments', departmentDetails);
    const department = response.data;
    yield put(fetchDepartmentSuccess(department));
  } catch (error) {
    yield put(fetchDepartmentsFailure(error))
  }
}
function* createDepartmentWatcher() {
  yield takeLatest(departmentActionTypes.CREATE_DEPARTMENT_START, createDepartmentWorker);
}


export function* departmentSagas() {
  yield all([
    call(fetchDepartmentsStart),
    call(createDepartmentWatcher)
  ]);
}
