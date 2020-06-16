import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import { createStructuredSelector } from 'reselect'
import { createDepartmentsStart, startUpdateDepartment,
     toggleComponentToUpdate, 
     updateDepartmentsStart,
     resetDepCreateComponent,
     toggleDepComponentToUpdate,
     hideCreateComponent} from '../../redux/department/department-actions'
import { connect } from 'react-redux'
import Button from '../button/button'
import { withRouter } from 'react-router-dom'
import { selectUserIsAdmin, selectCurrentUser } from '../../redux/user/user-selectors'
import { selectDepComponentIsCreating, selectDepComponentIsUpdating, selectCreateDepartmentHidden } from '../../redux/department/department-selectors'

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
        const {
            startCreateDepartment, history, isUpdating, isCreating, departmentId,
            updateDepartmentsStart, currentUser, hideCreateComponent
        } = this.props
        
        if (isCreating) {
            const departmentDetails = this.state
            departmentDetails.admin = currentUser.id
            startCreateDepartment({departmentDetails, history})
        }
        if (isUpdating) {
            const departmentDetails = this.state
            departmentDetails.admin = currentUser.id
            updateDepartmentsStart({departmentDetails, history, departmentId})
        }
        hideCreateComponent()
        
    }
    
    render=()=> {
        const {handleChange, submitForm} = this
        const {title, blog, } = this.state
        const {isCreating, isUpdating} = this.props
        
        return (
            <div className='create-course-card'>
            {
                isCreating?<h3>Register Department</h3>:null
            }
            {
                isUpdating?<h3>Update Department</h3>:null
            }
            
            <form onSubmit={submitForm}>
                <FormInput type='text' required name='title' value={title} handleChange={handleChange} placeholder='title'/>
                <textarea name='blog' value={blog} required onChange={handleChange} className='blog-text-area' rows='5'
                placeholder='Tell us about the department 500 characters'
                ></textarea>
                <Button type='submit' label='SUBMIT'/>
                
            </form>
                
            </div>
        )
    }
    
}

const mapStateToProps = createStructuredSelector({
    isAdmin: selectUserIsAdmin,
    isCreating: selectDepComponentIsCreating,
    isUpdating: selectDepComponentIsUpdating,
    currentUser: selectCurrentUser,
    componentHidden: selectCreateDepartmentHidden
})
const mapDispatchToProps = dispatch => ({
    startCreateDepartment: departmentDetails => dispatch(createDepartmentsStart(departmentDetails)),
    updateDepartmentsStart: departmentDetails => dispatch(updateDepartmentsStart(departmentDetails)),
    resetDepCreateComponent: departmentDetails => dispatch(resetDepCreateComponent(departmentDetails)),
    toggleDepComponentToUpdate: ()=>dispatch(toggleDepComponentToUpdate()),
    hideCreateComponent: ()=>dispatch(hideCreateComponent())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (RegisterDepartment))