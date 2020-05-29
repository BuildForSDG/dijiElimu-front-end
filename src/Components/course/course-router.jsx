import React from 'react'
import {Route} from 'react-router-dom'
import withSpinner from '../with-spinner/with-spinner'
import Course from './course.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCourse, selectCourseLoading } from '../../redux/course/course-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import Unit from '../unit/unit.component'

import { startFetchCourse } from '../../redux/course/course-actions'
import { selectUnitIsLoading } from '../../redux/unit/unit-selectors'

const CourseWithSpinner = withSpinner(Course)
const UnitWithSpinner = withSpinner(Unit)
class CourseRouter extends React.Component {
    componentDidMount =()=>{
        const {match: {params:{courseCode}}} = this.props
        const {fetchCourseStart} = this.props
        fetchCourseStart(courseCode)
    }
    render = ()=>{
        const {match, courseLoading, course} = this.props
        
        return (
        <div>
            <Route path={match.path} render={(props) => {
                return <CourseWithSpinner isLoading={!courseLoading} course={course}{...props}/>
            }
            }/> 
            <Route component={UnitWithSpinner} path={`${match.path}/:unitCode`}/>   
        </div>
    )}
}

const mapStateToProps = createStructuredSelector({
    course: selectCourse,
    currentUser: selectCurrentUser,
    courseLoading: selectCourseLoading,
    unitLoading: selectUnitIsLoading,
})
const mapDispatchToProps = dispatch=>({
    fetchCourseStart: (courseId)=>dispatch(startFetchCourse(courseId))
})
export default connect(mapStateToProps,mapDispatchToProps) (CourseRouter)
