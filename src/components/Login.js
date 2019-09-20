import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  updateEmail (e) {
    this.setState({
      email: e.target.value
    })
  }

  updatePassword (e) {
    this.setState({
      password: e.target.value
    })
  }

  loginUser (e) {
    e.preventDefault();
    const credentials = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    });
    this.props.handleLoading(true);

    fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      credentials: 'include',
      body: credentials
    }).then((response => response.json()))
      .then(({ user }) => {
        console.log(user);
        this.props.handleLoading(false);
        this.props.handleLogin(true, user);
        localStorage.setItem('_isLoggedIn', 'true')
        localStorage.setItem('_user', JSON.stringify(user))
      })
      .catch((e) => {
        console.log(e);
        this.props.handleLoading(false);
      })
    
  }

  render () {
    return (
      <div id="login_signup">
        <form id="login_form">
          <div className="form_div">
            <label htmlFor="login_email">Email</label>
            <input type="email" id="login_email" name="login_email" 
              value={ this.state.email } onChange={ this.updateEmail }/>
          </div>
          <br />
          <div className="form_div">
            <label htmlFor="login_password">Password</label>
            <input type="password" id="login_password" name="login_password" 
              value={ this.state.password } onChange={ this.updatePassword } />
          </div>
          <br />
          <button type="submit" onClick={ this.loginUser }> Log in</button>
        </form>
        <div id="link">
          <Link to="/signup" >Sign up</Link>
        </div>
      </div>
    )
  }
}

export default Login;