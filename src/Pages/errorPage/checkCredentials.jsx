import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import './checkCredentials.scss'
import Button from '../../Components/button/button'
import {  foundError, showErrorModal } from '../../redux/error/error-actions'
import FormInput from '../../Components/form-input/form-input'
import { selectCredentialsModalHidden, selectCurrentUser } from '../../redux/user/user-selectors'
import { showCredentialsModal, hideCredentialsModal } from '../../redux/user/user.actions'
import axios from '../../redux/axios'


class CheckCredentials extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }
    
    
    cancelModal = () => {
        this.props.hideCredentialsModal()
    }

    handleSubmit = async () =>{
        const {currentUser, hideCredentialsModal,foundError,showErrorModal, action, actionPayload} = this.props
        hideCredentialsModal()
        try {
            const response = await axios.post(`users/login`,this.state)
            const user = response.data.user
            if (currentUser.id!==user.id) {
                throw new Error('Please enter valid credentials')
            }
            action(actionPayload)
        } catch (error) {      
            const {response} = error
                  
            foundError(response)
            showErrorModal()
            
        }
        
    }
    
    render (){
        const {handleChange, handleSubmit, cancelModal} = this
        const { email, password} = this.state
            return(
                <React.Fragment>
                {
                    <div className='modal-container'>
                    <div className='modal-overlay'>
                    </div>
                    <div className='modal'>
                        <div className='modal-header'>
                            <h3>Confirm email and password</h3>
                        </div>
                        <div className='modal-body'>
                            <form className='sign-in-form' >
                           
                            <FormInput type='email' required name='email' value={email} handleChange={handleChange} label='email'/>
                            <FormInput type='password' required name='password' value={password} handleChange={handleChange} label='password'/>
                            <div className='buttons'>
                                <Button type='button' handleClick={handleSubmit} label='SUBMIT'/>
                            </div>
                        </form>
                        </div>

                        <div className='modal-footer'>
                            <Button handleClick={cancelModal} label='Cancel'/>
                        </div>
                    </div>
                    </div>
                }
                    
                </React.Fragment>

            )
    
            }  
}

const mapStateToProps = createStructuredSelector({
    credentialsModalHidden: selectCredentialsModalHidden,
    currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch =>({
    showCredentialsModal: ()=>dispatch(showCredentialsModal()),
    hideCredentialsModal: ()=>dispatch(hideCredentialsModal()),
    foundError: (payload)=>dispatch(foundError(payload)),
    showErrorModal: ()=>dispatch(showErrorModal())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckCredentials)
