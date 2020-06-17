import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import './App.scss';
import SignInSignUp from './Components/sign-in-sign-up/sign-in-sign-up';
import Header from './Components/header/header';
import Landing from './Pages/landing/landing'
import Profile from './Components/profile.component.jsx/profile.component';
import Directory from './Components/directory/directory.component';
import DepartmentRouter from './Components/full-department/department-router'
import CourseRouter from './Components/course/course-router';
import Footer from './Components/footer/footer.component';
import unitRouter from './Components/unit/unit-Router';
import { connect } from 'react-redux';
import { getProfileFetch } from './redux/user/user.actions';
import ErrorMessage from './Pages/errorPage/error-message';
import { createStructuredSelector } from 'reselect';
import { selectErrorModalHidden } from './redux/error/error-selectors';
import { fetchDepartmentsStart } from './redux/department/department-actions';

class App extends React.Component {

  componentDidMount = () =>{   
    const {getProfileFetch, fetchDepartmentsStart} = this.props
    getProfileFetch()
    fetchDepartmentsStart()
  
  }
  render = () =>{
    const {errorModalHidden} = this.props
    return (
      <div className="app">
        <Header/>
        <div className='page-wrapper'>
          <Switch>
            <Route component={Landing} path={`/`} exact={true}/>
            <Route component={Directory} path={`/departments`} exact={true}/>
            <Route component={SignInSignUp} path={`/signup`}/>  
            <Route component={Profile} path={`/profile`}/> 
            <Route component={DepartmentRouter} path={`/departments/:departmentId`}/>
            <Route component={CourseRouter} path={`/courses/:courseId`}/>
            <Route component={unitRouter} path={`/units/:unitId`}/>
          </Switch>
        </div>
        {
          !errorModalHidden && <ErrorMessage/>
        }
        <Footer/>
      </div>
    );
}
}
const mapStateToProps = createStructuredSelector({
  errorModalHidden: selectErrorModalHidden,
})
const mapDispatchToProps = dispatch=>({
  getProfileFetch: ()=>dispatch(getProfileFetch()),
  fetchDepartmentsStart: ()=>dispatch(fetchDepartmentsStart())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
