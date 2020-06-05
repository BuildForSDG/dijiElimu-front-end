// import {
//   takeLatest, all, call, put

// } from 'redux-saga/effects';

// import {
//   fetchCourseSuccess,
// } from './error-actions';
// import data from '../../mydata.json';
// import selectCourseDepartments from './course-utils';

// // fetch course saga
// function* fetchCourseWorker(action) {
//   const { payload } = action;


//   try {
//     // const course = yield axios.get(`https://www.dijielimuAPI.com/courses/:${payload}`)
//     const course = selectCourseDepartments(data.departments, payload);
//     const code = { course };
//     yield put(fetchCourseSuccess(course));

//   } catch (error) {
//     yield put(fetchCourseFailure(error));
//   }
// }

// export function* fetchCourseWatcher() {
//   yield takeLatest(courseActionTypes.FETCH_COURSE_START, fetchCourseWorker);
// }

// // courses root saga
// export function* courseSagas() {
//   yield all([
//     call(fetchCourseWatcher),
//     call(deleteCourseWatcher),
//     call(updateCourseWatcher),
//     call(createCourseWatcher)
//   ]);
// }
