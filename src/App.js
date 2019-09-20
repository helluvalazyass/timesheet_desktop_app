import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isLoggedIn: localStorage.getItem('_isLoggedIn') === 'true' || false,
      user: JSON.parse(localStorage.getItem('_user')) || {}
    }
    this.handleLoading = this.handleLoading.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount () {
    this.setState({ isLoading: false });
  }
  handleLoading (isLoading) {
    this.setState({ isLoading });
  }

  handleLogin (isLoggedIn, user) {
      this.setState({
        isLoggedIn,
        user
      })
  }

  handleLogout () {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
    localStorage.clear()
  }

  render () {
    return (
      <Router>
        <Route path="/" render={ () => {
          return (
            this.state.isLoggedIn
          ? <Dashboard 
              isLoggedIn={ this.state.isLoggedIn }
              handleLoading={ this.handleLoading } 
              handleLogout={ this.handleLogout } 
              user={ this.state.user } 
            />
          : <Homepage 
              isLoggedIn={ this.state.isLoggedIn } 
              handleLoading={ this.handleLoading } 
              handleLogin={ this.handleLogin }
            />
          )
        }
        } />
      </Router>
    );
  }
}

export default App;
