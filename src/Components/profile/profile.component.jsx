import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from'reselect'
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { signOutUser } from '../../redux/user/user.actions';
import Button from '../button/button';


const Profile = (props) => {
    const {currentUser, logOutUser} = props
    const handleClick = () => {
        logOutUser()
        
    }    
    return (
        <div>
            {
                currentUser?
                <div>
                <h6><span>{currentUser.firstName}</span>{currentUser.secondName}</h6>
                <Button onClick={handleClick} label={'LOG OUT'}/>
            </div>: 
            <Button label={`GO TO SIGN UP PAGE?`}/>
            }
            
            
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
const mapDispatchToProps =dispatch => ({
    logOutUser: () => dispatch(signOutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
