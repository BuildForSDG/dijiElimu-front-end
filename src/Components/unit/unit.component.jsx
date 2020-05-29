import React from 'react'

const Unit = (props) => {
    const {unit} = props
    return (
        <div>
            {
                unit.videos.map(video=>{
                    return (
                        <div>
                            <embed src={video.videoUrl}/>
                            <h3>{video.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Unit
