import React, { Component } from 'react'
import FormInput from '../../form-input/form-input'
import { createStructuredSelector } from 'reselect'
import { startCreatePdf, startUpdatePdf} from '../../../redux/pdf/pdf-actions'
import { connect } from 'react-redux'
import Button from '../../button/button'
import { withRouter } from 'react-router-dom'
import {  selectCurrentUser } from '../../../redux/user/user-selectors'
import { selectCreatePdfIsCreating, selectCreatePdfIsUpdating } from '../../../redux/pdf/pdf-selectors'

class RegisterPdf extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title : '',
             url: ''
        }
        
    }
    componentWillUpdate = () => {
        if (this.props.isUpdating) {
            this.setState({
                title : this.props.pdf.title,
                url: this.props.pdf.url
            })
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
            history, isUpdating, isCreating, 
            unit, pdf, createPdfStart,
            updatePdfStart
        } = this.props
        
        if (isCreating) {
            const pdfDetails = this.state
            pdfDetails.unit = unit.id
            createPdfStart({pdfDetails, history})
        }
        if (isUpdating) {
            const pdfDetails = this.state
            const pdfId = pdf.id
            updatePdfStart({pdfDetails, history, pdfId})
        }
        
        
    }
    
    render=()=> {
        const {handleChange, submitForm} = this
        const {title, url, } = this.state
        const {isCreating, isUpdating} = this.props
        
        return (
            <div className='create-course-card'>
            {
                isCreating?<h3>Register pdf</h3>:null
            }
            {
                isUpdating?<h3>Update pdf</h3>:null
            }
            
            <form onSubmit={submitForm}>
                <FormInput type='text' required name='title' value={title} handleChange={handleChange} label='title'/>
                <FormInput name='url' value={url} required handleChange={handleChange} label='Url'
                />
                <Button type='submit' label='SUBMIT'/>
                
            </form>
                
            </div>
        )
    }
    
}

const mapStateToProps = createStructuredSelector({
    isCreating: selectCreatePdfIsCreating,
    isUpdating: selectCreatePdfIsUpdating,
    currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch => ({
    createPdfStart: pdfDetails => dispatch(startCreatePdf(pdfDetails)),
    updatePdfStart: pdfDetails => dispatch(startUpdatePdf(pdfDetails)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (RegisterPdf))