import {
  takeLatest, all, call, put

} from 'redux-saga/effects';
import axios from '../axios';
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

    yield put(fetchCourseSuccess(course));
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
  const { courseDetails, history } = payload;
  try {
    const { course } = yield axios.post('/courses', courseDetails);
    yield put(createCourseSuccess(course));
    yield history.push(`/course${course.code}`);
  } catch (error) {
    yield put(createCourseFailure(error));
    yield history.push('/error');
  }
}

export function* createCourseWatcher() {
  yield takeLatest(courseActionTypes.CREATE_COURSE_START, createCourseWorker);
}
// delete course sagas
function* deleteCourseWorker(action) {
  const { payload } = action;
  try {
    const course = yield axios.get(`/courses/${payload}`);
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
  const { courseCode } = payload;
  try {
    const response = yield axios.patch(`/courses/${courseCode}`);
    const { course } = response;
    yield put(call(updateCourseSuccess, course));
  } catch (error) {
    yield put(call(updateCourseFailure, error));
  }
}

export function* updateCourseWatcher() {
  yield takeLatest(courseActionTypes.UPDATE_COURSE_START, updateCourseWorker);
}
// COURSE SUBSCRIPTION SAGAS
export function* subscribeToCourseWorker(action) {
  const { subsDetails, history } = action.payload;
  try {
    const response = yield axios.post('/courseSubscription', subsDetails);
    const subscription = response.data;
    const { status } = response;
    yield put({ subscription, status });
  } catch (error) {
    yield put({ error });
    history.push('/error');
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
