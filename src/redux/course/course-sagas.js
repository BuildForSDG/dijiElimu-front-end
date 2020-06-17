import {
  takeLatest, all, call, put

} from 'redux-saga/effects';
import axios from '../axios';
import courseActionTypes from './course-action-types';
import {
  fetchCourseSuccess,
  createCourseSuccess,
  deleteCourseSuccess,
  updateCourseSuccess,
} from './course-actions';
import { foundError, showErrorModal } from '../error/error-actions';

// fetch course saga
function* fetchCourseWorker(action) {
  const { payload:{history, courseId} } = action;


  try {
    const response = yield axios.get(`/courses/:${courseId}`)
    const course = response.data
    yield put(fetchCourseSuccess(course));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* fetchCourseWatcher() {
  yield takeLatest(courseActionTypes.FETCH_COURSE_START, fetchCourseWorker);
}

// create course sagas
function* createCourseWorker(action) {
  const { payload } = action;
  const { courseDetails, history } = payload;
  try {
    const response = yield axios.post('/courses', courseDetails);
    yield put(createCourseSuccess(response.data));
    yield history.push(`/course${response.data.id}`);
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* createCourseWatcher() {
  yield takeLatest(courseActionTypes.CREATE_COURSE_START, createCourseWorker);
}
// delete course sagas
function* deleteCourseWorker(action) {
  const { payload } = action;
  try {
    const response = yield axios.get(`/courses/${payload}`);
    yield put(deleteCourseSuccess(response.data));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* deleteCourseWatcher() {
  yield takeLatest(courseActionTypes.DELETE_COURSE_START, deleteCourseWorker);
}
// UPDATE COURSE SAGAS
function* updateCourseWorker(action) {
  const { payload } = action;
  const { courseCode } = payload;
  try {
    const response = yield axios.patch(`/courses/${courseCode}`);
    const course  = response.data;
    yield put(updateCourseSuccess(course));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* updateCourseWatcher() {
  yield takeLatest(courseActionTypes.UPDATE_COURSE_START, updateCourseWorker);
}
// COURSE SUBSCRIPTION SAGAS
export function* subscribeToCourseWorker(action) {
  const { subsDetails, history } = action.payload;
  try {
    const response = yield axios.post('/subscriptions', subsDetails);
    const subscription = response.data;
    const { status } = response;
    yield put({ subscription, status });
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}
export function* subscribeToCourseWatcher() {
  yield takeLatest(courseActionTypes.SUBSCRIBE_COURSE_START, subscribeToCourseWorker);
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
