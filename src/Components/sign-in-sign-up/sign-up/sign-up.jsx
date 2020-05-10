import React from 'react'
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
             confirmPassword:''
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
        const { email, password, firstName, secondName, confirmPassword } = this.state
        
        if (password!==confirmPassword) {
            alert('passwords do not match')
            return
        }
       const {signUpStudentStart} = this.props
       signUpStudentStart({ email, password, firstName, secondName })
    }
    
    render =()=>{
        const {
            firstName,
            secondName,
            password,
            confirmPassword,
            email 
        } = this.state;
        const { handleChange, handleSubmit } = this
        return (<div className='sign-up-section'>
                <form onSubmit={handleSubmit}>
                    <FormInput type='text' name='firstName' handleChange={handleChange} value={firstName} label='first name'></FormInput>
                    <FormInput type='text' name='secondName' handleChange={handleChange} value={secondName} label='second name'></FormInput>
                    <FormInput type='email' required name='email' value={email} handleChange={handleChange} label='email'/>
                    <FormInput type='password' name='password' handleChange={handleChange} value={password} label='password' ></FormInput>
                    <FormInput type='psssword' name='confirmPassword' handleChange={handleChange} value={confirmPassword} label='comfirmPassword' ></FormInput>
                    <Button type='submit' name='password' label='SIGN'></Button>
                </form>
            </div>
    )
        }     
        
    }

const mapDispatchToProps = dispatch =>({
    signUpStudentStart: (signUpData)=>dispatch(signUpStudentStart(signUpData))
})

export default connect(null, mapDispatchToProps)(SignUp)