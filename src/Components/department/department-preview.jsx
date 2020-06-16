import React from 'react'
import { withRouter } from 'react-router-dom'
import ShowCard from '../ShowCard/show-card'
import './department-preview.scss'
import Button from '../button/button'


const DepartmentPreview = ({dept, history}) => {
    
    
    const {title, courses , id} = dept
    const handleClick = () => {
        history.push(`/departments/:${id}`)

    }
    
    return (
        <div > 
            <h3 className='pl'>{title.toUpperCase()}</h3>
            <div className='department'>
            {   courses.map((course, index)=>{
                if (index<=3) {
                    return <ShowCard key={course.id} course={course}/>
                }
                    
                })
            }
            
            </div>
            <div className='button'>
                <Button handleClick={handleClick} label='SEE MORE' />
            </div>
            
        </div>
    )
}


export default withRouter(DepartmentPreview)
