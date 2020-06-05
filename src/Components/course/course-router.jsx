import React from 'react'
import {Route} from 'react-router-dom'
import withSpinner from '../with-spinner/with-spinner'
import Course from './course.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCourse, selectCourseLoading } from '../../redux/course/course-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

import { startFetchCourse } from '../../redux/course/course-actions'

const CourseWithSpinner = withSpinner(Course)
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
        </div>
    )}
}

const mapStateToProps = createStructuredSelector({
    course: selectCourse,
    currentUser: selectCurrentUser,
    courseLoading: selectCourseLoading,
})
const mapDispatchToProps = dispatch=>({
    fetchCourseStart: (courseId)=>dispatch(startFetchCourse(courseId))
})
export default connect(mapStateToProps,mapDispatchToProps) (CourseRouter)
