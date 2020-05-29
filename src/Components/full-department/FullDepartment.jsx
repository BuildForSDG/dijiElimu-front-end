import React from 'react'
import { connect } from 'react-redux'
import { selectFullDepartment } from '../../redux/department/department-selectors'
import ShowCard from '../ShowCard/show-card'
import { createStructuredSelector } from 'reselect'

const FullDepartment = ({department, location, history, match}) => {
    const {courses, title} = department
    return (
        <div > 
            <h3>{title.toUpperCase()}</h3>
            <div className='department'>
            {
                courses.map((course)=>{
                    return <ShowCard key={course.code} course={course}/>
                })
            }
            
            </div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    department: selectFullDepartment
})
export default connect(mapStateToProps)(FullDepartment)
