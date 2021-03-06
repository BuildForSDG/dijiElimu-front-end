import React from 'react'
import {withRouter} from 'react-router-dom'
import './sign-up.scss'
import Button from '../../button/button'
import FormInput from  '../../form-input/form-input'
import { connect } from 'react-redux'
import { signUpStudentStart } from '../../../redux/user/user.actions'


class SignUp extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             firstName: '',
             secondName: '',
             email:'',
             password: '',
             confirmPassword:'',
             role:'student'
        }
    }
    
    
    handleChange = (e)=>{        
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async e=>{
        e.preventDefault()
        console.log(this.state.role);
        
        const { email, password, firstName, secondName, confirmPassword, role } = this.state
        
        if (password!==confirmPassword) {
            alert('passwords do not match')
            return
        }
        const signUpData = { email, password, firstName, secondName, confirmPassword }
        signUpData.isStudent = role==='student'
        signUpData.isTutor = role==='tutor'
       const {signUpStudentStart, history} = this.props
       signUpStudentStart({signUpData, history})
    }
    
    render =()=>{
        const {
            firstName,
            secondName,
            password,
            confirmPassword,
            email,
            role
        } = this.state;
        const { handleChange, handleSubmit } = this
        return (<div className='sign-up-section'>
                <form onSubmit={handleSubmit}>
                    <h4>Do not have an account? Sign Up Below</h4>
                    <FormInput type='text' name='firstName' handleChange={handleChange} value={firstName} label='first name'/>
                    <FormInput type='text' name='secondName' handleChange={handleChange} value={secondName} label='second name'/>
                    <FormInput type='email' required name='email' value={email} handleChange={handleChange} label='email'/>
                    <FormInput type='password' name='password' handleChange={handleChange} value={password} label='password' />
                    <FormInput type='psssword' name='confirmPassword' handleChange={handleChange} value={confirmPassword} label='comfirmPassword' />
                    <div>
                    <label htmlFor='role' className='select-label'>Role</label>
                    <select onChange={handleChange} value ={role} name='role' className='form-select' aria-label='select data period type'>
                        <option  value='student' aria-label='days'>Student</option>
                        <option value="tutor" aria-label='weeks'>Tutor</option>
                    </select>
                </div>
                    <div className='buttons'>
                        <Button name='password' label='SUBMIT'  type='submit'/>
                    </div>
                </form>
            </div>
    )
        }     
        
    }

const mapDispatchToProps = dispatch =>({
    signUpStudentStart: (signUpData)=>dispatch(signUpStudentStart(signUpData))
})

export default withRouter(connect(null, mapDispatchToProps)(SignUp))