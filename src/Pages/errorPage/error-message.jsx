import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectError, selectErrorModalHidden } from '../../redux/error/error-selectors'
import { hideErrorModal } from '../../redux/error/error-actions'
import './error.styles.scss'

const ErrorMessage = ({errorResponse, hideErrorModal, errorModalHidden}) => {

    useEffect(() => {
        console.log(errorResponse);
        
        const timer = setTimeout(() => {
            if (!errorModalHidden) {
                hideErrorModal()
            }
            }, 3000);
        
        return () => {
            clearTimeout(timer)
        }
    }, [])
    
    return (
        <div className='error-message-container'>
            <h3>Error</h3>
            {
                <div>
                    <h6>Status Code {errorResponse.status}</h6>
                    <p>{errorResponse.statusText}</p>
                </div>
            }
        </div>
    )
}
const mapStateToProps= createStructuredSelector({
    errorModalHidden: selectErrorModalHidden,
    errorResponse: selectError
})
const mapDispatchToProps = dispatch => ({
    hideErrorModal: () => dispatch(hideErrorModal()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage)