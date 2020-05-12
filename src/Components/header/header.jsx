
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import './header.scss'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import { selectCurrentUser} from '../../redux/user/user-selectors'
import { signOutUser, toggleProfileHidden } from '../../redux/user/user.actions'
import Profile from '../profile/profile.component'
import ProfileIcon from '../profile-icon/profile-icon'
import { selectProfileHidden } from '../../redux/user/user-selectors';

const Header =(props)=>{
    const {currentUser, history, signOutUser, toggleProfileHidden, profileHidden}= props
    
    return  (
        
            <nav className='nav'>
                <Link to='/'>HOME</Link>
                
                <ul className='navRight'>
                    <Link to='/courses'><li>SCHOOL</li></Link>
                    
                    <Link to='/contact'><li>CONTACT</li></Link>
                    {currentUser?<li onClick={()=>signOutUser()} className='header-option'>SIGN OUT</li>:<Link to='/signup'><li>SIGN IN</li></Link>}
                    
                    <i className="fas fa-user-circle header-option" onClick={() => {
                        toggleProfileHidden()
                    }
                    }></i>
                    
                    {
                        profileHidden===true?null:<div className='cart'>
                            <Profile/>   
                        </div>
                    }
                    
                </ul>
            </nav>
        
)
    
}
const mapStateToProps = createStructuredSelector(
    
    {
        currentUser: selectCurrentUser,
        profileHidden: selectProfileHidden
    }
)
const mapDispatchToProps = dispatch =>({
    signOutUser: ()=>dispatch(signOutUser()),
    toggleProfileHidden: ()=>dispatch(toggleProfileHidden())

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))