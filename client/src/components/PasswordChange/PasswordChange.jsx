import React, { Component } from 'react';
 
import { withFirebase } from '../Firebase';

import './PasswordChange.scss';
 
class PasswordChangeForm extends Component {
  state={
    passwordOne: '',
    passwordTwo: '',
    error: null,
  }
 
  onSubmit = (e) => {
    const { passwordOne } = this.state;
 
    this.props.firebase
      .PasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;
 
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';
 
    return (
      <form onSubmit={this.onSubmit} className="passwordchange__form">
        <div className="passwordchange__form-div1">
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="New Password"
            className="passwordchange__form-input"
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm New Password"
            className="passwordchange__form-input"
          />
          <button disabled={isInvalid} type="submit" className="passwordchange__form-button">
          Reset My Password
          </button>
        </div>
 
        {error && <p className="passwordchange__form-errortext"
>{error.message}</p>}
      </form>
    );
  }
}
 
export default withFirebase(PasswordChangeForm);