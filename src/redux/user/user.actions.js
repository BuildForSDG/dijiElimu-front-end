import { userActionTypes } from "./user.type";


export const signUpStudentStart = (signUpData)=>({
    type: userActionTypes.SIGN_UP_STUDENT_START,
    payload: signUpData
});

export const signUpStudentSuccess = user=>({
    type: userActionTypes.SIGN_UP_STUDENT_SUCCESS,
    payload: user
});

export const signUpStudentFailure = error =>({
    type: userActionTypes.SIGN_UP_STUDENT_FAILURE,
    payload: error
});


export const signInStudentStart =(signInData)=>({
    type: userActionTypes.SIGN_IN_STUDENT_START,
    payload: signInData
});

export const signInStudentSuccess = user=>({
    type: userActionTypes.SIGN_IN_STUDENT_SUCCESS,
    payload: user
});

export const signInStudentFailure = error =>({
    type: userActionTypes.SIGN_IN_STUDENT_FAILURE,
    payload: error
});