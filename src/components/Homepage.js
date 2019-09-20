import React, { Component, lazy, Suspense } from 'react';
import {Route, Redirect } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
const Login = lazy(() => import('./Login'));
const Signup = lazy(() => import('./Signup'));

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toSignup: true,
      loginSuccess: false
    }
    this.updateForm = this.updateForm.bind(this);
  }

  updateForm (toSignup) {
    this.setState(( toSignup ))
  }

  render () {
    return (
      // toSignup ? 
      // <Signup updateForm={ this.updateForm } handleLoading={ this.props.handleLoading }/> : 
      // <Login updateForm={ this.updateForm } handleLoading={ this.props.handleLoading }/>
      <>
      <Route path={["/login", "/"]} render={ () => {
        return ( 
          <Suspense fallback={<div>Loading...</div>}>
          { !this.props.isLoggedIn
            ?
            <Login 
              updateForm={ this.updateForm } 
              handleLoading={ this.props.handleLoading } 
              handleLogin={ this.props.handleLogin }
            />
            :
            <Redirect to="/" />
          }
          </Suspense>

        )}
      }/>
      <Route path="/signup" render={ () => {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Signup updateForm={ this.updateForm } handleLoading={ this.props.handleLoading }/> 
          </Suspense>
        )}
      }/>
      </>
    )
  }
}

export default Homepage;