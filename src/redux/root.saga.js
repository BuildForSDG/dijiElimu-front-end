import { all, call } from 'redux-saga/effects';
import {
  onSignUpStudentStart,
  onSignInStudentStart
} from './user/user.sagas';


function* rootSaga() {
  yield all([
    call(onSignUpStudentStart),
    call(onSignInStudentStart)
  ]);
}

export default rootSaga;
