import React from 'react';

// import { Link } from 'react-router-dom';

import AUTH_SERVICE from '../../services/AuthService';

const NavBar = props => {
  const logoutAndLiftUserState = () => {
    AUTH_SERVICE.logout()
      .then(() => props.onUserChange(null))
      .catch(err => console.log(err));
  };
  return (
    <nav>
      {/* <Link to='/'>
        <strong>Home</strong>
      </Link> */}

        <>
          <span>{props.currentUser.username}</span>
          <a onClick={logoutAndLiftUserState} style={{position:"absolute",top:"0",right:"0", margin:"1rem"}}> Logout </a>
        </>
      
    </nav>
  );
};

export default NavBar;
