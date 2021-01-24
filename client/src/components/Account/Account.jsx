import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session/Session';
 
import PasswordChangeForm from '../PasswordChange/PasswordChange';

import './Account.scss';
 
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="account">
        <div className="account__card">
          <h1 className="account__header">User: {authUser.email}</h1>
          <PasswordChangeForm />
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);