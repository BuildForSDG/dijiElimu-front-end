import{  all } from 'redux-saga/effects';
import {
    onSignUpStudentStart,
    signInStudentAsync,
    signInStudentStart,
    signUpStudentAsync
} from './user/user.sagas';


function* rootSaga () {
    yield all([
        onSignUpStudentStart(),
        signInStudentAsync(),
        signInStudentStart(),
        signUpStudentAsync()
    ])
}

export default rootSaga