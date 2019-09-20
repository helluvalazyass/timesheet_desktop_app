import React from 'react';
import { Link, Route } from 'react-router-dom';


function Header (props) {
  return (
    <>
    <p>Welcome { props.first_name }</p>
    <Link to="/timesheet">Timesheet</Link>
    <Link to="/projects">My Projects</Link>
    <button onClick={ props.handleLogout }>Log out</button>
    </>
  )
}

export default Header;