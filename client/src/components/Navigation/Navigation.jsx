import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut/SignOut';
import { AuthUserContext } from '../Session/Session';

const Navigation = () => (
    <div><AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer></div>
  );
   
  const NavigationAuth = () => (
    <ul>
      <li>
        <Link to={'/'}>Landing</Link>
      </li>
      <li>
        <Link to={'/home'}>Home</Link>
      </li>
      <li>
        <Link to={'/account'}>Account</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  );
   
  const NavigationNonAuth = () => (
    <ul>
      <li>
        <Link to={'/'}>Landing</Link>
      </li>
      <li>
        <Link to={'/signin'}>Sign In</Link>
      </li>
    </ul>
  );
   
  export default Navigation;