import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session/Session';

import SearchBar from '../SearchBar/SearchBar';
import SignOutButton from '../SignOut/SignOut';

import './Navigation.scss';

const NavigationAuth = () => (
  <div className="navauth">

    <SearchBar/>

    <ul className="navauth__list">
      <li className="navauth__list-item">
        <Link to={'/home'} className="navauth__list-item-link">Home</Link>
      </li>
      <li className="navauth__list-item">
        <Link to={'/account'} className="navauth__list-item-link">Account</Link>
      </li>
      <li className="navauth__list-item">
        <SignOutButton/>
      </li>
    </ul>
  </div>
);
   
const NavigationNonAuth = () => (
  <div className="navauth">
    <div></div>
    <ul className="navauth__list">
      <li className="navauth__list-item">
        <Link to={'/'} className="navauth__list-item-link">Landing</Link>
      </li>
      <li className="navauth__list-item">
        <Link to={'/signin'} className="navauth__list-item-link">Sign In</Link>
      </li>
    </ul>
  </div>
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