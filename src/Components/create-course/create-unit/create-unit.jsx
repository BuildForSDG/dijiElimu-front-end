import React, { Component } from 'react'
import FormInput from '../../form-input/form-input'
import { createStructuredSelector } from 'reselect'
import { createUnitStart, updateUnitStart } from '../../../redux/unit/unit-actions'
import { connect } from 'react-redux'
import Button from '../../button/button'
import  './create-unit.styles.scss';
import { selectComponentIsCreating, selectComponentIsUpdating } from '../../../redux/unit/unit-selectors'

class RegisterUnit extends Component {
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
        const {startCreateCourse, isCreating, isUpdating} = this.props
        const unitDetails = this.state
        if (isCreating) {
            startCreateCourse(unitDetails)
        }else if(isUpdating){
            updateUnitStart(unitDetails)
        }
        
    }
    
    render=()=> {
        const {handleChange, submitForm} = this
        const {title, blog} = this.state
        const {isCreating, isUpdating} = this.props
        return (
            <div className='create-course-card'>
            {isCreating?<h3>Register unit</h3>:null}
            {isUpdating?<h3>Update unit</h3>:null}
            <form onSubmit={submitForm}>
                <FormInput type='text' required name='title' value={title} handleChange={handleChange} placeholder='title'/>
                <textarea name='blog' value={blog} required onChange={handleChange} className='create-course-text-area'
                rows='5'
                placeholder='Tell us about the course 500 characters'
                ></textarea>
                <Button type='submit' label='SUBMIT'/>
                
            </form>
                
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCreating: selectComponentIsCreating,
    isUpdating: selectComponentIsUpdating
})
const mapDispatchToProps = dispatch => ({
    createUnitStart: unitDetails => dispatch(createUnitStart(unitDetails)),
    updateUnitStart: unitDetails => dispatch(updateUnitStart(unitDetails)),
})


export default connect(mapStateToProps, mapDispatchToProps) (RegisterUnit)