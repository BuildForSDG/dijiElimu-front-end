import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import './course.styles.scss'
import Button from '../button/button';
import { createStructuredSelector } from 'reselect';
import {
    selectUserIsTutor,
    selectUserIsAdmin
 } from '../../redux/user/user-selectors';
import { startDeleteCourse, resetCreateCourseComponent, toggleCreateCourseHidden, toggleComponentToUpdate } from '../../redux/course/course-actions';
import { connect } from 'react-redux';
import { userIsCourseTutor, selectCreatingCourseNotUpdating, selectCreateCourseHidden, selectComponentIsUpdating } from '../../redux/course/course-selectors';
import { selectCreateUnitHidden } from '../../redux/unit/unit-selectors';
import { toggleCreateUnitHidden } from '../../redux/unit/unit-actions';
import RegisterUnit from '../create-course/create-unit/create-unit'
import RegisterCourse from '../create-course/create-course.component'
import StripeCheckoutButton from '../stripe-checkout/stripe-checkout.component';


const Course =(props)=> {

 const {course, match, isAdmin, isTutor,
     deleteCourseStart, location, history,
     isCourseTutor,
     toggleCreateUnit,
     createUnitHidden,
     toggleCreateCourseHidden,
     createCourseHidden
    } = props
useEffect(() => {
    
    return () => {
        resetCreateCourseComponent()
    }
}, [])
 const deleteCourse = () => {
    deleteCourseStart(course.code)
 }
 const addUnit = () => {
    toggleCreateUnit()
 }
 const updateCourse = () => {
    toggleComponentToUpdate()
     toggleCreateCourseHidden()
 }
 
 
 
    
    return (
    <div className={'course-container'}>
        <div>
            <StripeCheckoutButton price={500}/>
        </div>
        <h3>{course.name}</h3>
        <p>{course.blog}</p>
        <div className='course-links'>
        {
            
            course.units.map(unit=>{
                return <Link to={`/units/${unit.code}`} key={unit.code}>{unit.title}</Link>
            })
        }
        <div>
        <div className='mt1'>
        {
            isCourseTutor?<a className='create-course-toggle ' onClick={ updateCourse}>UpDate Course</a>:null
        }
        {
            !createCourseHidden&&<RegisterCourse/>
        }
        </div>
        <div className='mt1'>
        {
            isCourseTutor?<a className='create-course-toggle ' onClick={ addUnit}>Add Unit</a>:null
        }
        </div>
       
        {
            !createUnitHidden && <RegisterUnit/>
        }
        </div>
        <div className='button'>
        {
            isAdmin||isCourseTutor?<Button className='delete-course-button' handleClick={deleteCourse} label='DELETE COURSE' />:null
        }
        </div>
        
        
         </div>
        
    </div>
    )
}
const mapStateToProps = createStructuredSelector({
    isAdmin: selectUserIsAdmin,
    isTutor: selectUserIsTutor,
    isCourseTutor: userIsCourseTutor,
    createCourseHidden: selectCreateCourseHidden,
    createUnitHidden: selectCreateUnitHidden,
    isUpdating: selectComponentIsUpdating
})

const mapDispatchToProps = dispatch=>({
    deleteCourseStart: (courseId)=>dispatch(startDeleteCourse(courseId)),
    toggleCreateUnit: ()=>dispatch((toggleCreateUnitHidden())),
    toggleComponentToUpdate: ()=>dispatch((toggleComponentToUpdate())),
    toggleCreateCourseHidden: ()=>dispatch(toggleCreateCourseHidden())
})
export default connect(mapStateToProps, mapDispatchToProps) (Course)