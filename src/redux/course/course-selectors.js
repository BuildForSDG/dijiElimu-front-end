import { createSelector } from 'reselect';


export const selectCourseState = (state) => state.course;

export const selectCourse = createSelector([selectCourseState],
     (course) => course.course);


export const selectCourseLoading = createSelector([selectCourse],
  (course) => !!course);

export const selectCreateCourseHidden = createSelector([selectCourseState],
     (course) => course.createCourseHidden);
