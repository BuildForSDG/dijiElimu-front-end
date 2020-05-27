import React from 'react';
import {Link, Route} from 'react-router-dom'
import './course.styles.scss'
import Button from '../button/button';
import { createStructuredSelector } from 'reselect';
import {
    selectCurrentUser,
    selectUserIsTutor,
    selectUserIsAdmin
 } from '../../redux/user/user-selectors';
import { startDeleteCourse } from '../../redux/course/course-actions';
import { connect } from 'react-redux';


const Course =(props)=> {

 const {course, match, isAdmin, isTutor, deleteCourseStart, location, history} = props
 const deleteCourse = () => {
    deleteCourseStart(course.code)
 }
 const addUnit = () => {
     history.push(`${location.pathName}/`)
 }
 
 
    
    return (
    <div className={'course-container'}>
        <h3>{course.name}</h3>
        <p>{course.blog}</p>
        <div className='course-links'>
        {
            
            course.unitsPure.map(unit=>{
                return <Link to={`${match.path}/:${unit.code}`} key={unit.code}>{unit.title}</Link>
            })
        }
        {
            isAdmin?<Button handleClick={deleteCourse} label='DELETE COURSE' />:null
        }
        {
            isTutor?<Button label='ADD UNIT' handleClick={ addUnit}/>:null
        }
         </div>
        
    </div>
    )
}
const mapStateToProps = createStructuredSelector({
    isAdmin: selectUserIsAdmin,
    isTutor: selectUserIsTutor
})

const mapDispatchToProps = dispatch=>({
    deleteCourseStart: (courseId)=>dispatch(startDeleteCourse(courseId))
})
export default connect(mapStateToProps, mapDispatchToProps) (Course)