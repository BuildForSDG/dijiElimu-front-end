import React from 'react'
import WithSpinner from  '../with-spinner/with-spinner'
import FullDepartment from './FullDepartment'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDepartmentStart } from '../../redux/department/department-actions'
import { selectDepartmentIsLoading, selectFullDepartment } from '../../redux/department/department-selectors'
import { createStructuredSelector } from 'reselect'


const DepartmentWithSpinner = WithSpinner(FullDepartment)
class DepartmentRouter extends React.Component {
    componentDidMount = () => {
        const {fetchDepartmentStart, match} = this.props
        const departmentId = match.params.departmentId
        fetchDepartmentStart({departmentId})
    }
    
    render = ()=>{
        const {match, isNotLoading, department} = this.props
        
        return (
        <div>
            <Route path={match.path} render={(props) => {
                return <DepartmentWithSpinner isLoading={!isNotLoading} department={department}{...props}/>
            }
            }/> 
        </div>
    )}
}
const mapStateToProps = createStructuredSelector({
    isNotLoading: selectDepartmentIsLoading,
    department: selectFullDepartment
})
const mapDispatchToProps = dispatch =>({
    fetchDepartmentStart: (payload)=>dispatch(fetchDepartmentStart(payload)),
   
})
export default connect(mapStateToProps, mapDispatchToProps)(DepartmentRouter)