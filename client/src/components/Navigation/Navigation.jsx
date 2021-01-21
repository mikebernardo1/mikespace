import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut/SignOut';
import { AuthUserContext } from '../Session/Session';

import './Navigation.scss';

const NavigationAuth = () => (
    <ul className="navauth">
      <li className="navauth__list">
        <Link to={'/home'} className="navauth__list-link">Home</Link>
      </li>
      <li className="navauth__list">
        <Link to={'/account'} className="navauth__list-link">Account</Link>
      </li>
      <li className="navauth__list">
        <SignOutButton  className="navauth__list-button"/>
      </li>
    </ul>
);
   
const NavigationNonAuth = () => (
    <ul className="navauth">
      <li className="navauth__list">
        <Link to={'/'} className="navauth__list-link">Landing</Link>
      </li>
      <li className="navauth__list">
        <Link to={'/signin'} className="navauth__list-link">Sign In</Link>
      </li>
    </ul>
);

export default function Navigation() {
  return (
    <div className="nav">
      <AuthUserContext.Consumer>
      {authUser =>
      authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
      </AuthUserContext.Consumer>
    </div>
  )
}