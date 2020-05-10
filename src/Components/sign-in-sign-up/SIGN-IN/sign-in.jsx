import React, { useState } from 'react'
import './sign-in.scss'
import FormInput from '../../form-input/form-input'
import Button from '../../button/button'
import { connect } from 'react-redux'
import {signInStudentStart} from '../../../redux/user/user.actions'


const SignIn = (props)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleChange = (e)=>{
        const {name, value}= e.target
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
        
    }
    const handleClick = async ()=>{
        const { signInStudentStart }= props;
        signInStudentStart({email, password});
    }
    
    
    return  ( <form  className='sign-in-form'>
            <FormInput type='email' required name='email' value={email} handleChange={handleChange} label='email'/>
            <FormInput type='password' required name='password' value={password} handleChange={handleChange} label='password'/>
            <div className='buttons'>
                <Button type='button'  onClick={handleClick} label='SUBMIT'/>
            </div>   
        </form>)
}

const mapDispatchToProps =dispatch => ({
    signInStudentStart: (signInData)=>dispatch(signInStudentStart(signInData)),    
});


export default connect(null, mapDispatchToProps)(SignIn);