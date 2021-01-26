import React from 'react';
import '../Navigation/Navigation.scss'
 
import { withFirebase } from '../Firebase/index';
 
const SignOutButton = ({ firebase }) => (
  <button type="button" className="navauth__list-item-button" onClick={firebase.SignOut}>
    Sign Out
  </button>
);
 
export default withFirebase(SignOutButton);
