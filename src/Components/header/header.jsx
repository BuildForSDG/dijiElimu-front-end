
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import './header.scss'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import { selectCurrentUser} from '../../redux/user/user-selectors'
import { signOutUser, toggleProfileHidden } from '../../redux/user/user.actions'
import ProfileModal from '../profile-modal/profileModal'
import { selectProfileHidden } from '../../redux/user/user-selectors';

const Header =(props)=>{
    const {currentUser, signOutUser, toggleProfileHidden, profileHidden, history}= props
    
    return  (
        
            <nav className='nav'>
                <Link to='/'>HOME</Link>
                
                <ul className='nav-right'>
                    <Link to='/departments'><li>SCHOOL</li></Link>
                    
                    <Link to='/contact'><li>CONTACT</li></Link>
                    {currentUser?<li onClick={()=>{                       
                        signOutUser()
                        history.push('/signup')
                    }} className='header-option'>SIGN OUT</li>:<Link to='/signup'><li>SIGN IN</li></Link>}
                    
                    <i className="fas fa-user-circle header-option " onClick={() => {
                        toggleProfileHidden()
                    }
                    }></i>
                    
                    {
                        profileHidden===true?null:<div className='cart'>
                            <ProfileModal/>   
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