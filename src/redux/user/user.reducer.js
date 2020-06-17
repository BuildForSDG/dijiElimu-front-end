import userActionTypes from './user.type';

const INITIAL_STATE = {
  currentUser: null,
  signUpError: '',
  signInError: '',
  profileHidden: true,
  myCourses: null,
  credentialsModalHidden: true,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_USER_SUCCESS:
    case userActionTypes.SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userActionTypes.SIGN_IN_USER_FAILURE:
      return {
        ...state,
        signInError: action.payload
      };
    case userActionTypes.SIGN_UP_USER_FAILURE:
      return {
        ...state,
        signUpError: action.payload
      };
    case userActionTypes.SIGN_OUT_USER:
      localStorage.removeItem('token')
      return {
        ...state,
        currentUser: null
      };
    case userActionTypes.TOGGLE_PROFILE_HIDDEN:

      return {
        ...state,
        profileHidden: !state.profileHidden
      };
    case userActionTypes.GET_COURSE_SUBSCRIPTIONS_SUCCESS:

      return {
        ...state,
        myCourses: action.payload
      };
    case userActionTypes.SHOW_CREDENTIALS_MODAL:
      return {
        ...state,
        credentialsModalHidden: false
      }
    case userActionTypes.HIDE_CREDENTIALS_MODAL:
      return {
        ...state,
        credentialsModalHidden: true
      }
    default:
      return state;
  }
};

export default userReducer;
