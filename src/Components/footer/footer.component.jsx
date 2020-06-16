import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {Link} from 'react-router-dom'
import { selectDepartments } from '../../redux/department/department-selectors'
import './footer.styles.scss'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-statement-container'>
                <h4>DijiElimu</h4>
                <p className='footer-statement'>Education is a good thing. Good things should not be hard to get. Join us in the revolution. Many have gone through our system and are now leading leaders in their professions</p>
            </div>
            <div className='quick-links-container'>
                
                <ul className='quick-links-list'>
                    <h6 className='quick-link-title'>Quick Links</h6>
                    <li> <small>Home</small></li>
                    <li> <small>Sign up</small></li>
                    <li> <small>Browse Programmes</small></li>
                    <li> <small>Customer Support</small></li>
                </ul>
            </div>
            <div>
            
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch=>({
    
})
const mapStateToProps = createStructuredSelector({
    departments: selectDepartments
})
export default connect(mapStateToProps,mapDispatchToProps)(Footer)
