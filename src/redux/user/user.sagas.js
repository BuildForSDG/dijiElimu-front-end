import {
  takeEvery, put, call, takeLatest, all
} from 'redux-saga/effects';
import axios from '../axios';
import userActionTypes from './user.type';
import {
  signUpStudentSuccess,
  signInStudentSuccess,
  getCourseSubsSuccess,
} from './user.actions';
import { foundError, showErrorModal } from '../error/error-actions';

// sign-up student
export function* signUpStudentWorker(action) {
  const { payload: {signUpData, history} } = action;  
  try {
    const response = yield axios.post('/users/', signUpData);
    const {user, token} = response.data
    localStorage.setItem("token", token)
    yield put(signUpStudentSuccess(user));
    history.push(`profile`)
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* onSignUpStudentStart() {
  yield takeLatest(userActionTypes.SIGN_UP_USER_START, signUpStudentWorker);
}

// sign in student
export function* signInStudentWorker(action) {
  const { payload: {signInData, history} } = action;  
  try {
    const response = yield axios.post('/users/login',signInData);    
    const {user, token } = response.data
    localStorage.setItem("token", token)
    yield put(signInStudentSuccess(user));
    history.push('/profile')
  } catch (error) {    
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* onSignInStudentStart() {
  yield takeEvery(userActionTypes.SIGN_IN_USER_START, signInStudentWorker);
}

// get subscriptions sagas
export function* getCourseSubscriptionsWorker(action) {
  const { payload: { userId} } = action;
  try {
    const response = yield axios.get(`/courseSubscriptions?user=${userId}`);
    const subs = response.data;
    yield put(getCourseSubsSuccess(subs));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}
export function* getCourseSubscriptionsWatcher() {
  yield takeEvery(userActionTypes.GET_COURSE_SUBSCRIPTIONS_START, getCourseSubscriptionsWorker);
}



//GET PROFILE FETCH 
export function* getProfileWorker() {
  const token = localStorage.getItem('token');
  console.log(token);
  
        try {
          const response = yield axios.get("users/profile")
          console.log(response);
          
          const {data} = response
          localStorage.setItem('token', data.token)
          yield put(signInStudentSuccess(data.user))
        } catch (error) {
          localStorage.removeItem("token")
        }
        
      
}

export function* getProfileWatcher() {
  yield takeLatest(userActionTypes.GET_PROFILE_START, getProfileWorker);
}

// delete SAGAS
export function* deleteUserWorker () {
  try {
    const response = yield axios.delete(`/users/me`)
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
    
  }
  

}
export function* deleteUserWatcher (){
  yield takeLatest(userActionTypes.START_DELETE_USER, deleteUserWorker)
}
export function* userSagas() {
  yield all([
    call(onSignUpStudentStart),
    call(onSignInStudentStart),
    call(getCourseSubscriptionsWatcher),
    call(deleteUserWatcher),
    call(getProfileWatcher)
  ]);
}