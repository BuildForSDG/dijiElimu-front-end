import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ShowCard from '../ShowCard/show-card'
import './department-preview.scss'
import Button from '../button/button'
import { selectDepartmentFromPreview } from '../../redux/department/department-actions'


const DepartmentPreview = ({dept, history, match, location, selectDepartmentFromPreview}) => {
    
    
    const {title, courses , code} = dept
    const handleClick = () => {
        selectDepartmentFromPreview(code)
        history.push(`/departments/:${code}`)

    }
    
    return (
        <div > 
            <h3 className='pl'>{title.toUpperCase()}</h3>
            <div className='department'>
            {   courses.map((course, index)=>{
                if (index<=3) {
                    return <ShowCard key={course.code} course={course}/>
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


const mapDispatchToProps = dispatch=>({
    selectDepartmentFromPreview: (code) => dispatch(selectDepartmentFromPreview(code))
    
})
export default withRouter(connect(null, mapDispatchToProps)(DepartmentPreview))
