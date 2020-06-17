import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { selectCreateDepartmentHidden } from '../../redux/department/department-selectors'
import ShowCard from '../ShowCard/show-card'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { toggleCreateDepartmentHidden, toggleDepComponentToUpdate, resetDepCreateComponent, hideCreateComponent } from '../../redux/department/department-actions'
import Button from '../button/button'
import CreateDepartment from '../create-department/create-department'

const FullDepartment = (props) => {
    const {department, currentUser,
        toggleCreateDepartmentHidden, toggleDepComponentToUpdate,
        createDepartmentHidden, hideCreateComponent, resetDepCreateComponent
    } = props
    const updateDepartment = () => {
        toggleCreateDepartmentHidden()
        toggleDepComponentToUpdate()
    }
    useEffect(() => {
        
        return () => {
            resetDepCreateComponent()
            hideCreateComponent()
        }
    })
    const {courses, title} = department
    return (
        <div > 
            <h3>{title.toUpperCase()}</h3>
            <div className='action-panel'>
            {currentUser&&currentUser.isAdmin?<Button label='Update Department' handleClick={updateDepartment}/>:null}
            </div>
            {
                !createDepartmentHidden&&<CreateDepartment departmentId={department.id}/>
            }
            
            <div className='department'>
            {
                courses.map((course)=>{
                    return <ShowCard key={course.id} course={course}/>
                })
            }
            
            </div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    createDepartmentHidden: selectCreateDepartmentHidden
})
const mapDispatchToProps = dispatch =>({
    toggleCreateDepartmentHidden: ()=>dispatch(toggleCreateDepartmentHidden()),
    toggleDepComponentToUpdate: ()=>dispatch(toggleDepComponentToUpdate()),
    hideCreateComponent: ()=>dispatch(hideCreateComponent()),
    resetDepCreateComponent: ()=>dispatch(resetDepCreateComponent())
})
export default connect(mapStateToProps, mapDispatchToProps)(FullDepartment)
