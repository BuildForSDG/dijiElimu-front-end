import {userActionTypes} from './user.type'

const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state=INITIAL_STATE, action) => {
    switch (key) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
    
        default:
            break;
    }
}
