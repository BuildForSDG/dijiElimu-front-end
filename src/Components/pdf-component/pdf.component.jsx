import React from 'react'
import './pdf.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {startDeletePdf, startUpdatePdf} from '../../redux/pdf/pdf-actions'
import Button from '../button/button'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import PdfRenderer from './pdfRenderer'

const PdfComponent = (props) => {
    const {pdf, unit, currentUser, startDeletePdf, startUpdatePdf} = props
    const deletePdf =() => {
        startDeletePdf(pdf.id)
    }
    
    return (
        <div className='pdf-player-container' >
            <PdfRenderer
            pdf={pdf}
            />
            <div className='action-panel'>
                <h3 className='video-title'>{pdf.title}</h3>
                {currentUser.isAdmin||currentUser.id===unit.tutor?<Button buttonDanger label='Delete Pdf' handleClick={deletePdf}/>:null}
            </div>
            
        </div>
        
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch=>({
    startDeletePdf: (pdfId)=>dispatch(startDeletePdf(pdfId)),
    startUpdatePdf: (payload)=>dispatch(startUpdatePdf(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(PdfComponent)