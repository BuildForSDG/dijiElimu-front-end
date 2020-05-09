import React from 'react'
import { useState } from 'react'
import './sign-up.scss'
import Button from '../../button/button'
import FormInput from  '../../form-input/form-input'
import { connect } from 'react-redux'
import { signUpStudentStart } from '../../../redux/user/user.actions'


const SignUp =(props)=>{
   
   
    const [userCredentials, setCredentials] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword: ''
    })
    const {password, confirmPassword, email, displayName} = userCredentials
    
    const handleChange = (e)=>{
        console.log(e);
        
        const {name, value} = e.target
        setCredentials({
            ...userCredentials,
            [name]:[value]
        })
    }
    const handleSubmit = async e=>{
        
        
        e.preventDefault()
        
        if (password!==confirmPassword) {
            alert('passwords do not match')
            return
        }
       const {signUpStudentStart} = props
       signUpStudentStart({email, password, displayName})
    }
    
    return (
            <div className='sign-up-section'>
                <form onSubmit={handleSubmit}>
                    <FormInput type='text' name='displayName' handleChange={handleChange} value={displayName} label='display name'></FormInput>
                    <FormInput type='email' required name='email' value={email} handleChange={handleChange} label='email'/>
                    <FormInput type='password' name='password' handleChange={handleChange} value={password} label='password' ></FormInput>
                    <FormInput type='psssword' name='confirmPassword' handleChange={handleChange} value={confirmPassword} label='comfirmPassword' ></FormInput>
                    <Button type='submit' name='password' label='SIGN'></Button>
                </form>
            </div>
        )
    }

const mapDispatchToProps = dispatch =>({
    signUpStudentStart: (emailAndPassword)=>dispatch(signUpStudentStart(emailAndPassword))
})

export default connect(null, mapDispatchToProps)(SignUp)