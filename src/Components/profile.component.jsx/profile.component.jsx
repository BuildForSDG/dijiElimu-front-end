import React, {useEffect}from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser, 
    selectUserIsAdmin, 
    selectUserIsTutor, 
    selectCredentialsModalHidden} from '../../redux/user/user-selectors'
import Button from '../button/button'
import { Link } from 'react-router-dom'
import { signOutUser, deleteUserStart, showCredentialsModal } from '../../redux/user/user.actions'
import CreateCourseComponent from '../create-course/create-course.component'
import { selectCreateCourseHidden, selectCOmponentIsCreating } from '../../redux/course/course-selectors'
import { toggleCreateCourseHidden, toggleComponentToCreate, resetCreateCourseComponent, startDeleteCourse } from '../../redux/course/course-actions'
import './profile.styles.scss'
import CreateDepartment from '../create-department/create-department'
import { toggleCreateDepartmentHidden, toggleDepComponentToCreate, resetDepCreateComponent, hideCreateComponent } from '../../redux/department/department-actions'
import { selectCreateDepartmentHidden } from '../../redux/department/department-selectors'
import CheckCredentials from '../../Pages/errorPage/checkCredentials'

const Profile = (props) => {
    
    const {
        currentUser,
        isAdmin,
        isTutor,
        logOut,
        history,
        createCourseHidden,
        toggleComponentToCreate,
        toggleCreateCourse,
        toggleCreateDepartmentHidden,
        toggleDepComponentToCreate,
        createDepartmentHidden,
        resetDepCreateComponent,
        resetCreateCourseComponent,
        hideCreateComponent,
        deleteUserStart,
        checkCredentialsHidden,
        showCredentialsModal
    } = props

    useEffect(() => {
        
        return () => {
            resetDepCreateComponent()
            resetCreateCourseComponent()
            hideCreateComponent()
        }
    }, [])

    const logOutUser = () => {
        history.push('/')
        logOut()
        
        
    }
    const createCourse = () => {
        toggleComponentToCreate()
        toggleCreateCourse()
    }
    const createDepartment =() => {
        toggleCreateDepartmentHidden()
        toggleDepComponentToCreate()
    }
    
    const deleteUser = () => {
        showCredentialsModal()
    }
    
    return (
        <div className='pl1 pt1'>
            {
                <div className='action-panel'>
                {isAdmin?<Button label='Create Department' handleClick={createDepartment}/>:null}
                {isTutor?<Button label='Create Course' handleClick={createCourse}/>:null}
                </div>
            }
            {!createCourseHidden && <CreateCourseComponent/>}
            {!createDepartmentHidden && <CreateDepartment/>}
            {
                currentUser?
                <div className='bordertb'>
                    <h5 >Name: <span>{currentUser.firstName} {currentUser.secondName}</span></h5>
                    <div>
                    <h5>My Courses</h5>
                    <div>
                        {
                            currentUser.mySubscriptions?
                            currentUser.mySubscriptions.map(course=>{
                                return<Link key={course.id} to={`/courses/${course.id}`}
                                
                                >{course.name}</Link>
                        
                            }): null
                        }
                    </div>
                    <Button handleClick={logOutUser} label='LOG OUT'/>
                    <Button handleClick={deleteUser} label='DELETE USER' buttonDanger/>
                   { !checkCredentialsHidden&&<CheckCredentials action={deleteUserStart}/>}
                    </div>
                </div>
                :
                <div>
                    <h3>You're not logged in</h3>
                    <Button label='GO TO SIGN-UP PAGE?' handleClick={() => {
                        history.push(`/signup`)
                    }
                    }/>
                </div>
            }
            
            
        </div>
    )
}
const mapDispatchToProps = dispatch=>({
    logOut: () => dispatch(signOutUser()),
    toggleCreateCourse: () => dispatch(toggleCreateCourseHidden()),
    toggleComponentToCreate: ()=>dispatch((toggleComponentToCreate())),
    toggleCreateDepartmentHidden: ()=>dispatch(toggleCreateDepartmentHidden()),
    toggleDepComponentToCreate: ()=>dispatch(toggleDepComponentToCreate()),
    resetDepCreateComponent: ()=>dispatch(resetDepCreateComponent()),
    resetCreateCourseComponent: ()=>dispatch(resetCreateCourseComponent()),
    hideCreateComponent: ()=>dispatch(hideCreateComponent()),  
    deleteUserStart: ()=>dispatch(deleteUserStart()),
    showCredentialsModal: ()=>dispatch(showCredentialsModal())
})
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isAdmin: selectUserIsAdmin,
    isTutor: selectUserIsTutor,
    createCourseHidden: selectCreateCourseHidden,
    creatingCourse: selectCOmponentIsCreating,
    createDepartmentHidden: selectCreateDepartmentHidden,
    checkCredentialsHidden: selectCredentialsModalHidden
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)