import React, { Component } from 'react';
 
import { withFirebase } from '../Firebase';
 
class PasswordChangeForm extends Component {
  state={
    passwordOne: '',
    passwordTwo: '',
    error: null,
  }
 
  onSubmit = (e) => {
    const { passwordOne } = this.state;
 
    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
 
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
 
export default withFirebase(PasswordChangeForm);