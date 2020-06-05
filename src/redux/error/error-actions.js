import errorActionTypes from './error-action-types';

export const errorHandler = (errorAndStatus) => ({
  type: errorActionTypes.FETCH_COURSE_START,
  payload: errorAndStatus
}
);
