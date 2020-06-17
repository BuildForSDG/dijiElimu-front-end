import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from'reselect'
import {withRouter} from 'react-router-dom'
import { selectCurrentUser,
    selectUserIsAdmin,
 } from '../../redux/user/user-selectors';
import { signOutUser, toggleProfileHidden } from '../../redux/user/user.actions';
import Button from '../button/button';
import './profile-modal.styles.scss'


const ProfileModal = (props)=>{
    const {history, 
        toggleProfileHidden, 
        currentUser,
    } = props
    const handleClick = () => {
        const { logOutUser, history } = props
        toggleProfileHidden()
        logOutUser()
        history.push('/')

    }    
    const navigateToPage = () => {
        toggleProfileHidden()
        history.push('/signup')
    }
    const goToFullProfile = () => {
        toggleProfileHidden()
        history.push('/profile')
    }
    const closeModal = () => {
        toggleProfileHidden()
    }
    
    
    
    
        return (
        <div className='profile' >
            <span className='close-profile-modal' onClick={closeModal}>{'>'}</span>
            {
                currentUser?
                <div>
                <h6 className ='ml1'> Logged in as: <span> {currentUser.firstName}</span> {currentUser.secondName}</h6>
                <Button onClick= {goToFullProfile} label='FULL PROFILE'/>
                <Button onClick={handleClick} label={'LOG OUT'}/>
            </div>: 
            <Button label={`SIGN UP`} onClick={navigateToPage}/>
            
            }
            
        </div>
    )
    }

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isAdmin: selectUserIsAdmin,
    isTutor: selectUserIsAdmin
})
const mapDispatchToProps =dispatch => ({
    logOutUser: () => dispatch(signOutUser()),
    toggleProfileHidden: () => dispatch(toggleProfileHidden())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileModal))
