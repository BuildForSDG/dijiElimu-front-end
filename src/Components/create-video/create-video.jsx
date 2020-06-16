import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import { createStructuredSelector } from 'reselect'
import { createVideoStart, updateVideoStart} from '../../redux/video/video-actions'
import { connect } from 'react-redux'
import Button from '../button/button'
import { withRouter } from 'react-router-dom'
import {  selectCurrentUser } from '../../redux/user/user-selectors'
import { selectVideoComponentIsCreating, selectVideoComponentIsUpdating } from '../../redux/video/video-selectors'

class RegisterVideo extends Component {
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
                title : this.props.video.title,
                url: this.props.video.url
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
            unit, video, createVideoStart,
            updateVideoStart
        } = this.props
        
        if (isCreating) {
            const videoDetails = this.state
            videoDetails.unit = unit.id
            createVideoStart({videoDetails, history})
        }
        if (isUpdating) {
            const videoDetails = this.state
            const videoId = video.id
            updateVideoStart({videoDetails, history, videoId})
        }
        
        
    }
    
    render=()=> {
        const {handleChange, submitForm} = this
        const {title, url, } = this.state
        const {isCreating, isUpdating} = this.props
        
        return (
            <div className='create-course-card'>
            {
                isCreating?<h3>Register video</h3>:null
            }
            {
                isUpdating?<h3>Update Video</h3>:null
            }
            
            <form onSubmit={submitForm}>
                <FormInput type='text' required name='title' value={title} handleChange={handleChange} label='title'/>
                <FormInput type='text' required name='url' value={url} handleChange={handleChange} label='Url'
                />
                <Button type='submit' label='SUBMIT'/>
                
            </form>
                
            </div>
        )
    }
    
}

const mapStateToProps = createStructuredSelector({
    isCreating: selectVideoComponentIsCreating,
    isUpdating: selectVideoComponentIsUpdating,
    currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch => ({
    createVideoStart: videoDetails => dispatch(createVideoStart(videoDetails)),
    updateVideosStart: videoDetails => dispatch(updateVideoStart(videoDetails)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (RegisterVideo))