import React from 'react'
import './video.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Button from '../button/button'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { deleteVideoStart } from '../../redux/video/video-actions'
import ResponsivePlayer from './ResponsivePlayer/responsive-player'

const VideoPlayer = (props) => {
    const {video, unit, currentUser} = props
    const deleteVideo =() => {
        deleteVideoStart(video.id)
    }
    
    return (
        <div className='video-player-container' >
            <ResponsivePlayer
            video={video}
            />
            <div className='action-panel'>
                <h3 className='video-title'>{video.title}</h3>
                {currentUser.isAdmin||currentUser.id===unit.tutor?<Button buttonDanger label='Delete Video' handleClick={deleteVideo}/>:null}
            </div>
            
        </div>
        
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch=>({
    deleteVideoStart: (videoId)=>dispatch(deleteVideoStart(videoId))
})
export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)
