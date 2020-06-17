import userActionTypes from './user.type';


export const signUpStudentStart = (signUpData) => ({
  type: userActionTypes.SIGN_UP_USER_START,
  payload: signUpData
});

export const signUpStudentSuccess = (user) => ({
  type: userActionTypes.SIGN_UP_USER_SUCCESS,
  payload: user
});

export const signUpStudentFailure = (error) => ({
  type: userActionTypes.SIGN_UP_USER_SUCCESS,
  payload: error
});


export const signInStudentStart = (signInData) => ({
  type: userActionTypes.SIGN_IN_USER_START,
  payload: signInData
});

export const signInStudentSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_USER_SUCCESS,
  payload: user
});

export const signInStudentFailure = (error) => ({
  type: userActionTypes.SIGN_IN_USER_FAILURE,
  payload: error
});


export const signOutUser = () => ({
  type: userActionTypes.SIGN_OUT_USER
});
export const toggleProfileHidden = () => ({
  type: userActionTypes.TOGGLE_PROFILE_HIDDEN
});
// deleteUser
export const deleteUserStart = () => ({
  type: userActionTypes.START_DELETE_USER
})

// SUBSCRIPTION actions
export const getCourseSubsStart = (subDetails) => ({
  type: userActionTypes.GET_COURSE_SUBSCRIPTIONS_FAILURE,
  payload: subDetails
});

export const getCourseSubsSuccess = (subs) => ({
  type: userActionTypes.GET_COURSE_SUBSCRIPTIONS_SUCCESS,
  payload: subs
});
export const getCourseSubsFailure = (error) => ({
  type: userActionTypes.GET_COURSE_SUBSCRIPTIONS_SUCCESS,
  payload: error
});

//get Profile

export const getProfileFetch = () => ({
  type: userActionTypes.GET_PROFILE_START,
})

//credentials MODAL

export const hideCredentialsModal = () => ({
  type: userActionTypes.HIDE_CREDENTIALS_MODAL
})
export const showCredentialsModal = () => ({
  type: userActionTypes.SHOW_CREDENTIALS_MODAL
})


