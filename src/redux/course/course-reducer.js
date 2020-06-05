import courseActionTypes from './course-action-types';


const INITIAL_STATE = {
  course: null,
  isLoading: false,
  error: null,
  createCourseHidden: true,
  createCourseAction: true,
  updateCourseAction: false,
  isCreating: false,
  isUpdating: false
};
const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case courseActionTypes.FETCH_COURSE_START:
      return {
        ...state,
        isLoading: true
      };
    case courseActionTypes.FETCH_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        course: action.payload
      };
    case courseActionTypes.FETCH_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case courseActionTypes.TOGLLE_CREATE_COURSE_HIDDEN:
      return {
        ...state,
        createCourseHidden: !state.createCourseHidden
      };
    case courseActionTypes.TOGGLE_TO_UPDATE:
      return {
        ...state,
        isCreating: false,
        isUpdating: true
      };
    case courseActionTypes.TOGGLE_TO_CREATE:
      return {
        ...state,
        isCreating: true,
        isUpdating: false
      };
    case courseActionTypes.RESET_CREATE_COURSE:
      return {
        ...state,
        isCreating: false,
        isUpdating: false,
        createCourseHidden: true
      };
    default:
      return state;
  }
};

export default courseReducer;
