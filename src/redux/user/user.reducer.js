import userActionTypes from './user.type';
import { selectProfileHidden } from './user-selectors';

const INITIAL_STATE = {
  currentUser: null,
  signUpError: '',
  signInError: '',
  profileHidden: true
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_USER_SUCCESS:
    case userActionTypes.SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };
    case userActionTypes.SIGN_IN_USER_FAILURE:
      return {
        ...state,
        signInError: action.payload
      };
    case userActionTypes.SIGN_UP_USER_FILURE:
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
      console.log(sele);

      return {
        ...state,
        profileHidden: !selectProfileHidden
      };
    default:
      return state;
  }
};

export default userReducer;
