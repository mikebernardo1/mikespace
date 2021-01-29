import React, { Component } from 'react';
 
import { withFirebase } from '../Firebase';

import './PasswordChange.scss';
 
class PasswordChangeForm extends Component {
  state={
    initialPassword: '',
    confirmedPassword: '',
    error: null,
  }
 
  onSubmit = (e) => {
    const { initialPassword } = this.state;
 
    this.props.firebase
      .PasswordUpdate(initialPassword)
      .then(() => {
        this.setState(this.state)
        return alert('Password Changed')
      })
      .catch(error => {
        this.setState({ error });
      })
    e.preventDefault();
  };
 
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
 
  render() {
    const { initialPassword, confirmedPassword, error } = this.state;
 
    const isInvalid =
      initialPassword !== confirmedPassword || initialPassword === '';
 
    return (
      <form onSubmit={this.onSubmit} className="passwordchange__form">
        <div className="passwordchange__form-div1">
          <input
            name="initialPassword"
            value={initialPassword}
            onChange={this.onChange}
            type="password"
            placeholder="New Password"
            className="passwordchange__form-input"
          />
          <input
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm New Password"
            className="passwordchange__form-input"
          />
          <button disabled={isInvalid} type="submit" className="passwordchange__form-button">
          Reset My Password
          </button>
        </div>
 
        {error && <p className="passwordchange__form-errortext">
        {error.message}</p>}
      </form>
    );
  }
}
 
export default withFirebase(PasswordChangeForm);