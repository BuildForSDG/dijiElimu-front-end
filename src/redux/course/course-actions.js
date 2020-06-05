import courseActionTypes from './course-action-types';

export const startFetchCourse = (courseCode) => ({
  type: courseActionTypes.FETCH_COURSE_START,
  payload: courseCode
}
);
export const fetchCourseSuccess = (course) => ({
  type: courseActionTypes.FETCH_COURSE_SUCCESS,
  payload: course
}
);
export const fetchCourseFailure = (error) => ({
  type: courseActionTypes.FETCH_COURSE_FAILURE,
  payload: error
});

// CREATE COURSE
export const startCreateCourse = (course) => ({
  type: courseActionTypes.CREATE_COURSE_START,
  payload: course
}
);
export const createCourseSuccess = (course) => ({
  type: courseActionTypes.CREATE_COURSE_START,
  payload: course
}
);
export const createCourseFailure = (error) => ({
  type: courseActionTypes.CREATE_COURSE_FAILURE,
  payload: error
});
// DELETE
export const startDeleteCourse = (courseCode) => ({
  type: courseActionTypes.DELETE_COURSE_START,
  payload: courseCode
}
);
export const deleteCourseSuccess = (course) => ({
  type: courseActionTypes.DELETE_COURSE_START,
  payload: course
}
);
export const deleteCourseFailure = (error) => ({
  type: courseActionTypes.DELETE_COURSE_FAILURE,
  payload: error
});
// update course
export const startUpdateCourse = (courseCode) => ({
  type: courseActionTypes.UPDATE_COURSE_START,
  payload: courseCode
}
);
export const updateCourseSuccess = (course) => ({
  type: courseActionTypes.UPDATE_COURSE_START,
  payload: course
}
);
export const updateCourseFailure = (error) => ({
  type: courseActionTypes.UPDATE_COURSE_FAILURE,
  payload: error
});


// general actions
export const toggleCreateCourseHidden = () => ({
  type: courseActionTypes.TOGLLE_CREATE_COURSE_HIDDEN
});

export const toggleComponentToUpdate = () => ({
  type: courseActionTypes.TOGGLE_TO_UPDATE
});
export const toggleComponentToCreate = () => ({
  type: courseActionTypes.TOGGLE_TO_CREATE
});
export const resetCreateCourseComponent = () => ({
  type: courseActionTypes.RESET_CREATE_COURSE
});

// COURSE SUBSCRIPTION ACTIONS
export const subscribeToCourseStart = (subsDetails) => ({
  type: courseActionTypes.SUBSCRIBE_COURSE_START,
  payload: subsDetails
});
export const subscribeToCourseFailure = (error) => ({
  type: courseActionTypes.SUBSCRIBE_COURSE_SUCCESS,
  payload: error
});
export const subscribeToCourseSuccess = (subscription) => ({
  type: courseActionTypes.SUBSCRIBE_COURSE_FAILURE,
  payload: subscription
});
