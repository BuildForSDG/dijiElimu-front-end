import React from 'react'
import './responsive-player.scss'
import ReactPlayer from 'react-player'

const ResponsivePlayer = ({video}) => {
    return (
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={video.url}
          width='100%'
          height='100%'
          controls={true}
        />
      </div>
    )
}

export default ResponsivePlayer
