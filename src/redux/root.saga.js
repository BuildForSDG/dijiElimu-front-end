import { all, call } from 'redux-saga/effects';
import {
  userSagas
} from './user/user.sagas';
import { departmentSagas } from './department/department.sagas';
import { courseSagas } from './course/course-sagas';
import { unitSagas } from './unit/unit-sagas';
import { videoSagas } from './video/video-sagas';
import { pdfSagas } from './pdf/pdf-sagas';


function* rootSaga() {
  yield all([
    call(userSagas),
    call(departmentSagas),
    call(courseSagas),
    call(unitSagas),
    call(videoSagas),
    call(pdfSagas)
  ]);
}

export default rootSaga;
