import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import { withFirebase } from '../Firebase/index';

import './PasswordForget.scss';
 
const PasswordForget = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const PasswordForgetLink = () => (
  <p className="passwordforget__form-text">
    <Link to={'/pw-forget'}  className="passwordforget__form-text-link">Forgot Password?</Link>
  </p>
);
 
class PasswordForgetFormBase extends Component {
    
    state = { 
    email: '',
    error: null, 
    };
 
  onSubmit = (e) => {
    const { email } = this.state;
 
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState( this.state );
      })
      .catch(error => {
        this.setState({ error });
      });
 
    e.preventDefault();
  };
 
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
 
  render() {
    const { email, error } = this.state;
 
    const isInvalid = email === '';
 
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
 
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
 
export default PasswordForget;
 
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
 
export { PasswordForgetForm, PasswordForgetLink };