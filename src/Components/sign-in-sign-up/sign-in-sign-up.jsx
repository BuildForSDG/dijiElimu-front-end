import React from 'react'
import SignIn from './SIGN-IN/sign-in'
import SignUp from './sign-up/sign-up'
import './sign-in-sign-up.scss'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const SignInSignUp =(props)=>{
    const {currentUser} = props
    return (<div >
        {
            currentUser?<Redirect to='/'/>:<div className='sign-up-wrapper'>
                <SignIn />
                <SignUp />
            </div>
        }
        
    </div>)
    
}
 const mapStateToProps = state=>({
    currentUser: state.user.currentUser
 })
export default connect(mapStateToProps)(SignInSignUp)