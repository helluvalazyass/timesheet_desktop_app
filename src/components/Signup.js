import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.loginUser = this.loginUser.bind(this)
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

  loginUser () {
    const credentials = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    });
    this.props.handleLoading(true);

    fetch('localhost:3000/api/user/login', {
      method: 'POST',
      body: credentials
    }).then((response => response.json()))
      .then(token => {
        console.log(token);
        this.props.handleLoading(false);
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
            <label htmlFor="first_name">First Name</label>
            <input type="email" id="first_name" name="first_name" 
              value={ this.state.first_name } onChange={ this.updateFirstName }/>
          </div>
          <br />
          <div className="form_div">
            <label htmlFor="last_name">Last Name</label>
            <input type="email" id="last_name" name="last_name" 
              value={ this.state.last_name } onChange={ this.updateLastName }/>
          </div>
          <br />
          <div className="form_div">
            <label htmlFor="signup_email">Email</label>
            <input type="email" id="signup_email" name="signup_email" 
              value={ this.state.email } onChange={ this.updateEmail }/>
          </div>
          <br />
          <div className="form_div">
            <label htmlFor="signup_password">Password</label>
            <input type="email" id="signup_password" name="signup_password" 
              value={ this.state.password } onChange={ this.updatePassword }/>
          </div>
          <br />
          <div className="form_div">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="password" id="confirm_password" name="confirm_password" 
              value={ this.state.confirmPassword } onChange={ this.updateConfirmPassword } />
          </div>
          <br />
          <button type="submit" onClick={ this.signupUser }> Sign up</button>
        </form>
        <div id="link">
          <Link to="/login" >Log in</Link>
        </div>
      </div>
    )
  }
}

export default Login;