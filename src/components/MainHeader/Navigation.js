import React, { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import {Link} from 'react-router-dom';
import classes from './Navigation.module.css';


const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
      {ctx.isLoggedIn && (
          <Link to='/addStory'>
          <li>
            <button> Add Story</button>
          </li>
          </Link>
        )}
        {ctx.isLoggedIn && (
          <Link to='/'>
          <li>
            <button onClick={ctx.onLogout} >Logout</button>
          </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
