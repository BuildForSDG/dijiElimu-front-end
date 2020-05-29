import React, { Component } from 'react'
import { connect } from 'react-redux'
import DepartmentPreview from '../department/department-preview'
import {createStructuredSelector} from 'reselect'
import{selectDepartments} from '../../redux/department/department-selectors'

class Directory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {departments} = this.props                
        return (
            <div className ='directory'>
                {
                    departments.map(dept=>{
                        return <DepartmentPreview key={dept.code} dept={dept}/>
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    departments: selectDepartments
})
const mapDispatchToProps = dispatch =>({

})

export default connect(mapStateToProps, mapDispatchToProps)(Directory)