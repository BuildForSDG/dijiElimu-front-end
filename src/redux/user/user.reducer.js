import {userActionTypes} from './user.type'

const INITIAL_STATE = {
    currentUser: null,
    signUpError: '',
    signInError: ''
}
const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGN_IN_STUDENT_SUCCESS:
        case userActionTypes.SIGN_UP_STUDENT_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case userActionTypes.SIGN_IN_STUDENT_FAILURE:
        
            return {
                ...state,
                signInError:action.payload
            } 
        case userActionTypes.SIGN_UP_STUDENT_FILURE:
            return {
                ...state,
                signUpError:action.payload
            }     
        default:
            return state;
    }
}

export default userReducer