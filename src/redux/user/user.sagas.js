import { takeEvery, put, call } from 'redux-saga/effects';
import {userActionTypes} from  './user.type';
import axios from 'axios';
import { signUpStudentStart, signUpStudentFailure, signUpStudentSuccess, signInStudentSuccess, signInStudentFailure } from './user.actions';

//sign-up student 
export function* signUpStudentAsync ({payload}) {
    const {userData }= payload
    try {
        const user = yield axios.post('https://www.dijielimu.com/users/signup', userData);
        yield put(signUpStudentSuccess(user));
    } catch (error) {
        yield put(call(signUpStudentFailure(error.message)));
    };
};

export function * onSignUpStudentStart () {
    yield takeEvery(userActionTypes.SIGN_UP_STUDENT_START, signUpStudentAsync);
};

// sign in student
export function* signInStudentAsync ({userData}) {

    try {
        const user = yield axios.post('https://www.dijielimu.com/users/signin', userData);
        yield put(signInStudentSuccess(user));
    } catch (error) {
        yield put(call(signInStudentFailure(error.message)));
    };
};

export function * signInStudentStart () {
    yield takeEvery(userActionTypes.SIGN_IN_STUDENT_START, signInStudentAsync);
};