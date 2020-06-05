import React from 'react'
import { connect } from 'react-redux'
import { selectError } from '../../redux/error/error-selectors'
import { createStructuredSelector } from 'reselect'


const ErrorPage = (props) => {
    const {error, status} = props
    switch (status) {
        case 400:
            return (
                <div>
                    <h1>Authorization error</h1>
                    <p>{error.message}</p>
                </div>
            )
        case 500:
            return (
                <div>
                    <h1>Server Error</h1>
                    <p>{error.message}</p>
                </div>
            )
    
        default:
            return(
                <div>ERROR ENCOUNTERED WHILE PERFORMING TASK</div>
            )
    }
   
}

const mapStateToProps = createStructuredSelector({
    error: selectError
})
const mapDispatchToProps = diapatch =>({

})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage)
