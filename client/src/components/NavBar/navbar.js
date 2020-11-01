import React from 'react';

import { Link } from 'react-router-dom';

import AUTH_SERVICE from '../../services/AuthService';

const NavBar = props => {
  const logoutAndLiftUserState = () => {
    AUTH_SERVICE.logout()
      .then(() => props.onUserChange(null))
      .catch(err => console.log(err));
  };
  return (
    <nav>
      <Link to='/'>
        <strong>Home</strong>
      </Link>

        <>
          <span>{props.currentUser.username}</span>
          <button onClick={logoutAndLiftUserState}> Logout </button>
        </>
      
    </nav>
  );
};

export default NavBar;
