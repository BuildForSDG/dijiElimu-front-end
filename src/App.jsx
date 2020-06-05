import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.scss';
import SignInSignUp from './Components/sign-in-sign-up/sign-in-sign-up';
import Header from './Components/header/header';
import Landing from './Pages/landing/landing'
import Profile from './Components/profile.component.jsx/profile.component';
import Directory from './Components/directory/directory.component';
import FullDepartment from './Components/full-department/FullDepartment'
import CourseRouter from './Components/course/course-router';
import Footer from './Components/footer/footer.component';
import ErrorPage from './Pages/errorPage/error-component';
import unitRouter from './Components/unit/unit-Router';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='body'>
        <Switch>
          <Route component={Landing} path={`/`} exact={true}/>
          <Route component={Directory} path={`/departments`} exact={true}/>
          <Route component={SignInSignUp} path={`/signup`}/>  
          <Route component={Profile} path={`/profile`}/> 
          <Route component={FullDepartment} path={`/departments/:departmentCode`}/>
          <Route component={CourseRouter} path={`/course/:courseCode`}/>
          <Route component={unitRouter} path={`/units/:unitCode`}/>
          <Route component={ErrorPage} path={`/error`}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
