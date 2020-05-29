import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser, 
    selectProfileHidden, 
    userIsStudent, 
    selectUserIsAdmin, 
    selectUserIsTutor } from '../../redux/user/user-selectors'
import Button from '../button/button'
import { Link } from 'react-router-dom'
import { signOutUser } from '../../redux/user/user.actions'
import CreateCourseComponent from '../create-course/create-course.component'
import { selectCreateCourseHidden } from '../../redux/course/course-selectors'
import { toggleCreateCourseHidden } from '../../redux/course/course-actions'
import './profile.styles.scss'

const Profile = (props) => {
    
    const {
        currentUser,
        isAdmin,
        isTutor,
        logOut,
        history,
        selectCreateCourseHidden,
        toggleCreateCourse
    } = props
    const logOutUser = () => {
        history.push('/')
        logOut()
        
        
    }
    
    return (
        <div>
            {
                currentUser?
                <div className='bordertb'>
                    <h5 >Name: <span>{currentUser.firstName} {currentUser.secondName}</span></h5>
                    <div>
                    <h5>My Courses</h5>
                    <div>
                        {
                            currentUser.myCourses.map(course=>{
                                return<Link key={course.code} to={`/courses/${course.code}`}
                                
                                >{course.name}</Link>
                        
                            })
                        }
                    </div>
                    <div>
                        {isTutor?<button onClick={() => {
                            toggleCreateCourse()
                        }
                        } className='create-course-toggle'>Create Course</button>:null}
                    </div>
                   
                    {!selectCreateCourseHidden && <CreateCourseComponent/>}
                   
                    <Button handleClick={logOutUser} label='LOG OUT'/>
                    </div>
                </div>
                :
                <div>
                    <h3>You're not logged in</h3>
                    <Button label='GO TO SIGN-UP PAGE?'/>
                </div>
            }
            
            
        </div>
    )
}
const mapDispatchToProps = dispatch=>({
    logOut: () => dispatch(signOutUser()),
    toggleCreateCourse: () => dispatch(toggleCreateCourseHidden())
    
     
})
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isAdmin: selectUserIsAdmin,
    isTutor: selectUserIsTutor,
    selectCreateCourseHidden: selectCreateCourseHidden
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)