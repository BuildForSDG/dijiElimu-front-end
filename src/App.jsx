import React from 'react';
import {Route, } from 'react-router-dom'
import './App.css';
import SignInSignUp from './Components/sign-in-sign-up/sign-in-sign-up';
import Header from './Components/header/header';
import HomePage from './Pages/homepage/homepage'

function App() {
  return (
    <div className="App">
      <Header/>
      <Route component={HomePage} path={`/`} exact={true}/>
      <Route component={SignInSignUp} path={`/signup`}/>  
    </div>
  );
}

export default App;
