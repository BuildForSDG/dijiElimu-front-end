import React from 'react'
import ReactPlayer from 'react-player'

const Unit = (props) => {
    const {unit} = props
    return (
        <div>
            
            {
                unit.videos.map(video=>{
                    return (
                        <div>
                            <ReactPlayer url={video.videoUrl}/>
                            <h3>{video.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Unit
