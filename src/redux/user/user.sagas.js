import {
  takeEvery, put, call, takeLatest, all
} from 'redux-saga/effects';
import axios from '../axios';
import userActionTypes from './user.type';
import {
  signUpStudentFailure,
  signUpStudentSuccess,
  signInStudentSuccess,
  signInStudentFailure,
  getCourseSubsSuccess,
  getCourseSubsFailure
} from './user.actions';

// sign-up student
export function* signUpStudentWorker(action) {
  const { payload } = action;
  try {
    const user = yield axios.post('/users/', payload);
    yield put(call(signUpStudentSuccess, user));
  } catch (error) {
    yield put(call(signUpStudentFailure, error.message));
  }
}

export function* onSignUpStudentStart() {
  yield takeLatest(userActionTypes.SIGN_UP_USER_START, signUpStudentWorker);
}

// sign in student
export function* signInStudentWorker(action) {
  const { payload } = action;
  try {
    const user = yield axios.post('/users', payload);
    yield put(call(signInStudentSuccess, user));
  } catch (error) {
    yield put(call(signInStudentFailure, error.message));
  }
}

export function* onSignInStudentStart() {
  yield takeEvery(userActionTypes.SIGN_IN_USER_START, signInStudentWorker);
}

// get subscriptions sagas
export function* getCourseSubscriptionsWorker(action) {
  const { payload: { userId, history } } = action;
  try {
    const response = yield axios.get(`/courseSubscriptions?user=${userId}`);
    const subs = response.data;
    yield put(getCourseSubsSuccess(subs));
  } catch (error) {
    yield put(getCourseSubsFailure);
  }
}
export function* getCourseSubscriptionsWatcher() {
  yield takeEvery(userActionTypes.GET_COURSE_SUBSCRIPTIONS_START, getCourseSubscriptionsWorker);
}

export function* userSagas() {
  yield all([
    call(onSignUpStudentStart),
    call(onSignInStudentStart),
    call(getCourseSubscriptionsWatcher)
  ]);
}
