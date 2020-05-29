import React from 'react'
import {withRouter} from 'react-router-dom'


export const CourseItem = ({otherData, history}) => {
    const navigateClick = () => {
        history.push(`/courses/:${course.id}`)
    }
    const {title, imageUrl} = otherData
    return (
        <div onClick={navigateClick}>
            <h4>{title}</h4>
        </div>
    )
}

export default withRouter(CourseItem)
