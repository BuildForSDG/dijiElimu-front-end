import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import { createStructuredSelector } from 'reselect'
import { startCreateDepartment, startUpdateDepartment,
     toggleComponentToUpdate } from '../../redux/department/department-actions'
import { connect } from 'react-redux'
import Button from '../button/button'
import { withRouter } from 'react-router-dom'
import { selectUserIsAdmin } from '../../redux/user/user-selectors'

class RegisterDepartment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title : '',
             blog: ''
        }
    }
    
    handleChange=e=>{
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    submitForm =e => {
        e.preventDefault()
        const {startCreateDepartment, history} = this.props
        const departmentDetails = this.state
        startCreateDepartment({departmentDetails, history})
    }
    
    render=()=> {
        const {handleChange, submitForm} = this
        const {title, blog} = this.state
        const {isAdmin} = this.props
        return (
            <div className='create-course-card'>
            {
                <h3>Register Department</h3>
            }
            
            <form onSubmit={submitForm}>
                <FormInput type='text' required name='title' value={title} handleChange={handleChange} placeholder='title'/>
                <textarea name='blog' value={blog} required onChange={handleChange} className='create-course-text-area'
                placeholder='Tell us about the course 500 characters'
                ></textarea>
                <Button type='submit' label='SUBMIT'/>
                
            </form>
                
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isAdmin: selectUserIsAdmin
})
const mapDispatchToProps = dispatch => ({
    startCreateDepartment: departmentDetails => dispatch(startCreateDepartment(departmentDetails)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (RegisterDepartment))