import React from 'react'
import {Route} from 'react-router-dom'
import Unit from './unit.component'
import WithSpinner from '../with-spinner/with-spinner'
import { startFetchUnit } from '../../redux/unit/unit-actions'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { selectCourse } from '../../redux/course/course-selectors'
import {selectUnitIsLoading, selectUnit} from '../../redux/unit/unit-selectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const UnitWithSpinner = WithSpinner(Unit)

class UnitRouter extends React.Component {
    
    componentDidMount= ()=>{
        const { match, startFetchUnit, history} = this.props
        const {unitId} = match.params        
        startFetchUnit({history, unitId})
    }
    
    render =()=>{
        const {unit, unitLoading} = this.props
        return (
            <div>
                <Route render={(props) => {
                    return <UnitWithSpinner {...props} isLoading={!unitLoading} unit={unit}/>
                }}
                />
            </div>
    )
}
}
const mapStateToProps = createStructuredSelector({
    course: selectCourse,
    currentUser: selectCurrentUser,
    unitLoading: selectUnitIsLoading,
    unit: selectUnit
})
const mapDispatchToProps = dispatch=>({
    startFetchUnit: (unitId)=>dispatch(startFetchUnit(unitId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UnitRouter)
