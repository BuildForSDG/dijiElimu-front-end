import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import { createStructuredSelector } from 'reselect'
import { startCreateCourse } from '../../redux/course/course-actions'
import { connect } from 'react-redux'
import Button from '../button/button'
import  './create-course.styles.scss';

class RegisterCourse extends Component {
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
        const {startCreateCourse} = this.props
        const courseDetails = this.state
        startCreateCourse(courseDetails)
    }
    
    render=()=> {
        const {handleChange, submitForm} = this
        const {title, blog} = this.state
        return (
            <div className='create-course-card'>
            <h3>Register Course</h3>
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
    startCreateCourse: startCreateCourse
})
const mapDispatchToProps = dispatch => ({
    startCreateCourse: courseDetails => dispatch(startCreateCourse(courseDetails))
})


export default connect(mapStateToProps, mapDispatchToProps) (RegisterCourse)