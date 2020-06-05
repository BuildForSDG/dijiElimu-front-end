import { createSelector } from 'reselect';


export const selectCourseState = (state) => state.course;

const selectUser = (state) => state.user;
const selectCurrentUser = createSelector([selectUser], (user) => (user ? user.currentUser : null));

export const selectCourse = createSelector([selectCourseState],
  (course) => course.course);


export const selectCourseLoading = createSelector([selectCourse],
  (course) => !!course);

export const selectCreateCourseHidden = createSelector([selectCourseState],
  (course) => course.createCourseHidden);

export const userIsCourseTutor = createSelector([selectCurrentUser, selectCourse], 
  (user, course) => (user && course ? course.tutor === user.id : false));

// export const subscribedToCourse = createSelector([selectCourse, selectCourse], 
//   (user, course) => {

// });
export const selectCOmponentIsCreating = createSelector([selectCourseState],
   (course) => course.isCreating);
export const selectComponentIsUpdating = createSelector([selectCourseState],
   (course) => course.isUpdating);
