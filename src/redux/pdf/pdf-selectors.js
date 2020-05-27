import { createSelector } from 'reselect';


export const course = (state) => state.course;

export const selectCourse = createSelector([course], (pdf) => pdf.course);
