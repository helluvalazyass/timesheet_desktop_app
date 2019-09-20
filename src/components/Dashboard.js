import React, { Component } from 'react';
import Header from './Header';
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header first_name={this.props.user.first_name} handleLogout={this.props.handleLogout} />
      </>
    )
  }
}

export default Dashboard;