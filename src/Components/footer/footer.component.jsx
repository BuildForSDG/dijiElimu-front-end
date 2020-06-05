import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {Link} from 'react-router-dom'
import { selectDepartments } from '../../redux/department/department-selectors'
import './footer.styles.scss'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
        </div>
    )
}

const mapDispatchToProps = dispatch=>({
    
})
const mapStateToProps = createStructuredSelector({
    departments: selectDepartments
})
export default connect(mapStateToProps,mapDispatchToProps)(Footer)
