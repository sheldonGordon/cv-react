import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import DetailsCurriculum from './components/curriculums/DetailsCurriculum'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateCurriculums from './components/curriculums/CreateCurriculum'

export class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/cv/:id' component={DetailsCurriculum} />
            <Route path='/signIn' component={SignIn} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/create' component={CreateCurriculums} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }  
}

export default App;
