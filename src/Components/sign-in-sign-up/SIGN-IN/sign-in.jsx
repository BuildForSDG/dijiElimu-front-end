import React, { useState } from 'react';
import './sign-in.scss';
import { connect } from 'react-redux';
import FormInput from '../../form-input/form-input';
import Button from '../../button/button';
import { signInStudentStart } from '../../../redux/user/user.actions';
import { withRouter } from 'react-router-dom';


class SignIn extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
  }
  
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };
  handleClick = async () => {
    const { signInStudentStart, history } =this.props;
    const {email, password} = this.state
    const signInData = {email, password}
    console.log(email, password);
    
    signInStudentStart({history, signInData});
  };

render =()=>{
  const {email, password} = this.state
  const {handleChange, handleClick} = this
  return (
    <form className='sign-in-form'>
          <h3>Already have an account? Sign In Below</h3>
          <FormInput type='email' required name='email' value={email} handleChange={handleChange} label='email'/>
          <FormInput type='password' required name='password' value={password} handleChange={handleChange} label='password'/>
          <div className='buttons'>
              <Button type='button' onClick={handleClick} label='SUBMIT'/>
          </div>
      </form>);
};
}

const mapDispatchToProps = (dispatch) => ({
  signInStudentStart: (signInData) => dispatch(signInStudentStart(signInData))
});


export default withRouter(connect(null, mapDispatchToProps)(SignIn));
