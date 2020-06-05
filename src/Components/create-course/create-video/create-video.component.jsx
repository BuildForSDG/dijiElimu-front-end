import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import { createStructuredSelector } from 'reselect'
import { startCreateCourse, startUpdateCourse, toggleComponentToUpdate, resetCreateCourseComponent } from '../../redux/course/course-actions'
import { connect } from 'react-redux'
import Button from '../button/button'
import  './create-course.styles.scss';
import { withRouter } from 'react-router-dom'
import { selectCreatingCourseNotUpdating, selectCOmponentIsCreating, selectComponentIsUpdating } from '../../redux/course/course-selectors'

class RegisterVideo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title : '',
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
        const {title, blog} = this.state
        const {isCreating, isUpdating} = this.props
        return (
            <div className='create-course-card'>
            {
                isCreating?<h3>Register Course</h3>: <h3>Update Course</h3>
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
    
})
const mapDispatchToProps = dispatch => ({
    
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (RegisterVideo))