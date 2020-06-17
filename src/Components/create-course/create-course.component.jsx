import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import { createStructuredSelector } from 'reselect'
import { startCreateCourse, startUpdateCourse, toggleComponentToUpdate, resetCreateCourseComponent } from '../../redux/course/course-actions'
import { connect } from 'react-redux'
import Button from '../button/button'
import  './create-course.styles.scss';
import { withRouter } from 'react-router-dom'
import { selectCOmponentIsCreating, selectComponentIsUpdating } from '../../redux/course/course-selectors'
import { selectDepartments } from '../../redux/department/department-selectors'

class RegisterCourse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title : '',
             blog: '',
             department: ''
        }
    }
    componentWillUnmount = () => {
        const {resetCreateCourse} = this.props
        resetCreateCourse()
    }
    
    handleChange=e=>{
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    submitForm =e => {
        e.preventDefault()
        const {startCreateCourse, history, isUpdating, isCreating, startUpdateCourse} = this.props
        const courseDetails = this.state
        if (isUpdating) {
            startUpdateCourse({courseDetails, history})
        }
        if (isCreating) {
            startCreateCourse({courseDetails, history})
        }
    }
    
    render=()=> {
        const {handleChange, submitForm} = this
        const {title, blog, department} = this.state
        const {isCreating, departments} = this.props
        return (
            <div className='create-course-card'>
            {
                isCreating?<h3>Register Course</h3>: <h3>Update Course</h3>
            }
            
            <form onSubmit={submitForm}>
                <FormInput type='text' required name='title' value={title} handleChange={handleChange} placeholder='title'/>

                <textarea name='blog' value={blog} required onChange={handleChange} 
                className='blog-text-area' rows='5'
                placeholder='Tell us about the course 500 characters'
                ></textarea>

                <select onChange={handleChange} value ={department} name='department' className='form-select' aria-label='select department for the course'>
                {departments.map(department=>{
                    return <option  value={department.id} >{department.title}</option>
                })}
                </select>
                <Button type='submit' label='SUBMIT'/>
                
            </form>
                
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isUpdating: selectComponentIsUpdating,
    isCreating: selectCOmponentIsCreating,
    departments: selectDepartments
})
const mapDispatchToProps = dispatch => ({
    startCreateCourse: courseDetails => dispatch(startCreateCourse(courseDetails)),
    startUpdateCourse: courseDetails => dispatch(startUpdateCourse(courseDetails)),
    toggleComponentToUpdate: () => dispatch(toggleComponentToUpdate()),
    resetCreateCourse: () => dispatch(resetCreateCourseComponent()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (RegisterCourse))