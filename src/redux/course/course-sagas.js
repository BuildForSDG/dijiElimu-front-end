import {
  takeLatest, all, call, put

} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';
import courseActionTypes from './course-action-types';
import {
  fetchCourseSuccess,
  createCourseFailure,
  createCourseSuccess,
  deleteCourseFailure,
  deleteCourseSuccess,
  updateCourseFailure,
  updateCourseSuccess,
  fetchCourseFailure
} from './course-actions';
import data from '../../mydata.json';
import selectCourseDepartments from './course-utils';

// fetch course saga
function* fetchCourseWorker(action) {
  const { payload } = action;


  try {
    // const course = yield axios.get(`https://www.dijielimuAPI.com/courses/:${payload}`)
    const course = selectCourseDepartments(data.departments, payload);
    const code = { course };
    yield put(fetchCourseSuccess(course));
    yield put(push(`/course/${code}`));
  } catch (error) {
    yield put(fetchCourseFailure(error));
  }
}

export function* fetchCourseWatcher() {
  yield takeLatest(courseActionTypes.FETCH_COURSE_START, fetchCourseWorker);
}

// create course sagas
function* createCourseWorker(action) {
  const { payload } = action;
  try {
    const course = yield axios.post(`https://www.dijielimuAPI.com/courses/:${payload}`);
    yield put(createCourseSuccess(course));
  } catch (error) {
    yield put(createCourseFailure(error));
  }
}

export function* createCourseWatcher() {
  yield takeLatest(courseActionTypes.CREATE_COURSE_START, createCourseWorker);
}
// delete course sagas
function* deleteCourseWorker(action) {
  const { payload } = action;
  try {
    const course = yield axios.get(`https://www.dijielimuAPI.com/courses/:${payload}`);
    yield put(call(deleteCourseSuccess, course));
  } catch (error) {
    yield put(call(deleteCourseFailure, error));
  }
}

export function* deleteCourseWatcher() {
  yield takeLatest(courseActionTypes.DELETE_COURSE_START, deleteCourseWorker);
}
// UPDATE COURSE SAGAS
function* updateCourseWorker(action) {
  const { payload } = action;
  try {
    const course = yield axios.get(`https://www.dijielimuAPI.com/courses/:${payload}`);
    yield put(call(updateCourseSuccess, course));
  } catch (error) {
    yield put(call(updateCourseFailure, error));
  }
}

export function* updateCourseWatcher() {
  yield takeLatest(courseActionTypes.UPDATE_COURSE_START, updateCourseWorker);
}
// courses root saga
export function* courseSagas() {
  yield all([
    call(fetchCourseWatcher),
    call(deleteCourseWatcher),
    call(updateCourseWatcher),
    call(createCourseWatcher)
  ]);
}
