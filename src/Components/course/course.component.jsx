import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import './course.styles.scss'
import Button from '../button/button';
import { createStructuredSelector } from 'reselect';
import {
    selectCurrentUser, selectCredentialsModalHidden
 } from '../../redux/user/user-selectors';
import { startDeleteCourse, resetCreateCourseComponent, 
    toggleCreateCourseHidden, toggleComponentToUpdate
 } from '../../redux/course/course-actions';
import { connect } from 'react-redux';
import {  selectCreateCourseHidden, selectComponentIsUpdating } from '../../redux/course/course-selectors';
import { selectCreateUnitHidden } from '../../redux/unit/unit-selectors';
import { toggleCreateUnitHidden, hideCreateUnitComponent, toggleToCreateUnit } from '../../redux/unit/unit-actions';
import RegisterUnit from '../create-course/create-unit/create-unit'
import RegisterCourse from '../create-course/create-course.component'
import StripeCheckoutButton from '../stripe-checkout/stripe-checkout.component';
import CheckCredentials from '../../Pages/errorPage/checkCredentials'
import { showCredentialsModal } from '../../redux/user/user.actions';


const Course =(props)=> {

 const {course, currentUser,
    toggleToCreateUnit,
     deleteCourseStart,
     toggleCreateUnit,
     createUnitHidden,
     toggleCreateCourseHidden,
     createCourseHidden,
     hideCreateUnitComponent,
     credentialsModalHidden,
     showCredentialsModal
    } = props
useEffect(() => {
    
    return () => {
        resetCreateCourseComponent()
        hideCreateUnitComponent()
    }
}, [])
 const deleteCourse = () => {
     showCredentialsModal()
 }
 const addUnit = () => {
    toggleCreateUnit()
    toggleToCreateUnit()
 }
 const updateCourse = () => {
    toggleComponentToUpdate()
     toggleCreateCourseHidden()
 }
 
    return (
    <div className='course-container ml1'>
        <div className='action-panel'>
        {
            currentUser.id===course.tutor?<Button inverted className='create-course-toggle ' onClick={  addUnit} label='Register Unit'></Button>:null
        }
        {
            currentUser.id===course.tutor?<Button inverted className='create-course-toggle ' onClick={updateCourse } label='UpDate Course'></Button>:null
        }
            <StripeCheckoutButton course={course} price={500}/>
        </div>
        <h3>{course.name}</h3>
        <p>{course.blog}</p>
        <div className='course-links'>
        {
            
            course.units.map(unit=>{
                return <Link to={`/units/${unit.id}`} key={unit.id}>{unit.title}</Link>
            })
        }
        <div>
        <div className='mt1'>
       
        {
            !createCourseHidden&&<RegisterCourse course={course}/>
        }
        </div>
        {
            !createUnitHidden && <RegisterUnit course={course}/>
        }
        </div>
        <div className='button'>
        {
            currentUser.isAdmin||course.tutor===currentUser.id?<Button buttonDanger className='delete-course-button' handleClick={deleteCourse} label='DELETE COURSE' />:null
        }
        
        
        </div>
        
        
         </div>
        {!credentialsModalHidden&&<CheckCredentials action={deleteCourseStart} actionPayload={course.id} />}
    </div>
    )
}
const mapStateToProps = createStructuredSelector({
   
    currentUser: selectCurrentUser,
    createCourseHidden: selectCreateCourseHidden,
    createUnitHidden: selectCreateUnitHidden,
    isUpdating: selectComponentIsUpdating,
    credentialsModalHidden: selectCredentialsModalHidden
})

const mapDispatchToProps = dispatch=>({
    deleteCourseStart: (courseId)=>dispatch(startDeleteCourse(courseId)),
    toggleCreateUnit: ()=>dispatch((toggleCreateUnitHidden())),
    toggleToCreateUnit: ()=>dispatch((toggleToCreateUnit())),

    toggleComponentToUpdate: ()=>dispatch((toggleComponentToUpdate())),
    toggleCreateCourseHidden: ()=>dispatch(toggleCreateCourseHidden()),
    hideCreateUnitComponent: ()=>dispatch(hideCreateUnitComponent()),
    showCredentialsModal: ()=>dispatch(showCredentialsModal()),
    startDeleteCourse: (courseId)=>dispatch(startDeleteCourse(courseId))
})
export default connect(mapStateToProps, mapDispatchToProps) (Course)