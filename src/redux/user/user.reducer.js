import userActionTypes from './user.type';
import userData from '../../userData.json';

const INITIAL_STATE = {
  currentUser: userData.userData,
  token: null,
  signUpError: '',
  signInError: '',
  profileHidden: true,
  myCourses: null
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_USER_SUCCESS:
    case userActionTypes.SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user,
        token: action.payload.token
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
    default:
      return state;
  }
};

export default userReducer;
