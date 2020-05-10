import { takeEvery, put, call } from 'redux-saga/effects';
import {userActionTypes} from  './user.type';
import axios from 'axios';
import { signUpStudentFailure, signUpStudentSuccess, signInStudentSuccess, signInStudentFailure } from './user.actions';

//sign-up student 
export function* signUpStudentWorker (action) {
   console.log(action)
   const { payload } = action
    try {
        const user = yield axios.post('https://www.dijielimu.com/users/signup', payload);
        yield put(call(signUpStudentSuccess,user));
    } catch (error) {
        yield put(call(signUpStudentFailure,error.message));
    };
};

export function * onSignUpStudentStart () {
    yield takeEvery(userActionTypes.SIGN_UP_STUDENT_START, signUpStudentWorker);
};

// sign in student
export function* signInStudentWorker(action) {
    const { payload } = action
    try {
        const user = yield axios.post('https://www.dijielimu.com/users/signin', payload);
        yield put(call(signInStudentSuccess,user));
    } catch (error) {
        yield put(call(signInStudentFailure, error.message));
    };
};

export function * onSignInStudentStart () {
    yield takeEvery(userActionTypes.SIGN_IN_STUDENT_START, signInStudentWorker);
};