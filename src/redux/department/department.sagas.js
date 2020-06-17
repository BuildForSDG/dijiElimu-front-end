import {
  call, all, takeLatest, put
} from 'redux-saga/effects';
import axios from '../axios';
import { fetchDepartmentsSuccess,  createDepartmentsSuccess, 
   updateDepartmentsSuccess, 
   fetchDepartmentSuccess} from './department-actions';

import departmentActionTypes from './department-action-types';
import { showErrorModal, foundError } from '../error/error-actions';

function* fetchDepartmentsWorker() {
  try {
    const response = yield axios.get('/departments');
    const departments = response.data;
    yield put(fetchDepartmentsSuccess( departments))
  } catch (error) {
    console.log(error);
    
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* fetchDepartmentsWatcher() {
  yield takeLatest(departmentActionTypes.FETCH_DEPARTMENTS_START,
     fetchDepartmentsWorker);
}
// fetch single department 

function* fetchDepartmentWorker({payload: {departmentId}}) {
  try {
    const response = yield axios.get(`/departments/${departmentId}`);
    const department = response.data;
    yield put(fetchDepartmentSuccess( department))
  } catch (error) {
    console.log(error);
    
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* fetchDepartmentWatcher() {
  yield takeLatest(departmentActionTypes.FETCH_DEPARTMENT_START,
     fetchDepartmentWorker);
}

// create Departments
function* createDepartmentWorker(action) {
  const { payload: { departmentDetails, history } } = action;
  try {
    const response = yield axios.post('/departments', departmentDetails);
    const department = response.data;
    yield put(createDepartmentsSuccess(department));
    history.push('/departments')
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}
function* createDepartmentWatcher() {
  yield takeLatest(departmentActionTypes.CREATE_DEPARTMENTS_START, 
    createDepartmentWorker);
}

// UPDATE DEPARTMENTS
function* updateDepartmentWorker(action) {
  const { payload: { departmentDetails, departmentId } } = action;
  try {
    const response = yield axios.patch(`/departments${departmentId}`, departmentDetails);
    const department = response.data;
    yield put(updateDepartmentsSuccess(department));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}
function* updateDepartmentWatcher() {
  yield takeLatest(departmentActionTypes.CREATE_DEPARTMENTS_START, updateDepartmentWorker);
}
// DEPARTMENT SAGAS
export function* departmentSagas() {
  yield all([
    call(fetchDepartmentsWatcher),
    call(createDepartmentWatcher),
    call(updateDepartmentWatcher),
    call(fetchDepartmentWatcher)
  ]);
}
