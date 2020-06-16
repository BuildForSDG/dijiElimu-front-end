import React, {useEffect} from  'react'
import './unit.styles.scss'
import CreateUnit from '../create-course/create-unit/create-unit'
import { selectCreateUnitHidden } from '../../redux/unit/unit-selectors'
import { toggleCreateUnitHidden, hideCreateUnitComponent, toggleToUpdateUnit} from '../../redux/unit/unit-actions'
import CreateVideo from '../create-video/create-video'
import { toggleCreateVideoHidden, toggleComponentToCreate, hideCreateVideoComponent } from '../../redux/video/video-actions'
import { selectCreateVideotHidden } from '../../redux/video/video-selectors'
import Button from '../button/button'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectCurrentUser, selectCredentialsModalHidden } from '../../redux/user/user-selectors'
import { hideCreatePdfComponent, toggleCreatePdfHidden, togglePdfComponentToCreate } from '../../redux/pdf/pdf-actions'
import CreatePdf from '../create-course/create-pdf/create-pdf'
import { selectCreatePdfHidden } from '../../redux/pdf/pdf-selectors'
import VideoPlayer from '../video-component/video.component'
import PdfComponent from '../pdf-component/pdf.component'
import CheckCredentials from '../../Pages/errorPage/checkCredentials'

const Unit = (props) => {
    const {unit, currentUser, createUnitHidden,toggleCreateUnitHidden,
        toggleToUpdateUnit, toggleCreateVideoHidden, toggleComponentToCreate,
        hideCreateVideoComponent, createVideoHidden,hideCreatePdfComponent,
        toggleCreatePdfHidden, createPdfHidden, togglePdfComponentToCreate,
        credentialsModalHidden

    } = props
    const updateUnit = () => {
        toggleCreateUnitHidden()
        toggleToUpdateUnit()
    }
    const addVideo = () => {
        toggleCreateVideoHidden()
        toggleComponentToCreate()
    }
    const addPdf = () => {
        toggleCreatePdfHidden()
        togglePdfComponentToCreate()
    }
    useEffect(() => {
        console.log(unit.pdfs);
        
        return () => {
            hideCreateUnitComponent()
            hideCreateVideoComponent()
            hideCreatePdfComponent()
        }
    })

    return (
        <div className='ml1'>
            <h3>{unit.title.toUpperCase()}</h3>
            <div className='action-panel'>
                {unit.tutor===currentUser.id?<Button label='Update Unit' handleClick={updateUnit}/>:null}
                {currentUser.id===unit.tutor&&<Button label='Add Video' handleClick={addVideo}/>}
                {currentUser.id===unit.tutor&&<Button label='Add Pdf' handleClick={addPdf}/>}
            </div>
            {!createUnitHidden&&<CreateUnit/>}
            {!createVideoHidden&&<CreateVideo/>}
            {!createPdfHidden&&<CreatePdf/>}
            <div className='unit-videos-grid'>
                {
                    unit.videos?unit.videos.map(video=>{
                        return (
                                <VideoPlayer video={video} unit ={unit}/>
                        )
                    }):null
                }
            </div>
            <div>
                {
                    unit.pdfs?unit.pdfs.map(pdf=>{
                        return (
                                <PdfComponent pdf={pdf}  unit={unit}/>
                        )
                    }):null
                }
            </div>
            {!credentialsModalHidden&&<CheckCredentials/>}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    createUnitHidden: selectCreateUnitHidden,
    createVideoHidden: selectCreateVideotHidden,
    currentUser: selectCurrentUser  ,
    createPdfHidden: selectCreatePdfHidden,
    credentialsModalHidden: selectCredentialsModalHidden
})
const mapDispatchToProps = dispatch => ({
    toggleCreateUnitHidden: () => dispatch(toggleCreateUnitHidden()),
    hideCreateUnitComponent: () => dispatch(hideCreateUnitComponent()),
    toggleToUpdateUnit:  ()=> dispatch(toggleToUpdateUnit()),
    toggleCreateVideoHidden: ()=>dispatch(toggleCreateVideoHidden()),
    toggleComponentToCreate: ()=>dispatch(toggleComponentToCreate()),
    hideCreateVideoComponent: ()=>dispatch(hideCreateVideoComponent()),
    hideCreatePdfComponent: ()=>dispatch(hideCreatePdfComponent()),
    toggleCreatePdfHidden: ()=>dispatch(toggleCreatePdfHidden()),
    togglePdfComponentToCreate: ()=>dispatch(togglePdfComponentToCreate())
})
export default connect(mapStateToProps, mapDispatchToProps)(Unit)
