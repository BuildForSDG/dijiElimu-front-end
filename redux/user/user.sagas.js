import {takeEvery} from 'redux-saga'
import {userActionTypes} from  './user.type'

function* getUserAsync () {
    try {
        
    } catch (error) {
        
    }
}
function* getUserStart (){
    takeEvery(userActionTypes.SET_CURRENT_USER, getUserAsync)
}