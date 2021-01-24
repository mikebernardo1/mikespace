import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import { withFirebase } from '../Firebase/index';

import './PasswordForget.scss';
 
const PasswordForget = () => (
  <div className="passwordforget">
    <div className="passwordforget__card">
      <h1 className="passwordforget__header">Password Forget</h1>
      <PasswordForgetForm />
    </div>
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
        this.setState( this.state )
        return alert('Password sent to email')
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
      <form onSubmit={this.onSubmit} className="passwordforget__form">
        <div className="passwordforget__form-div1">
          <input
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address" className="passwordforget__form-input"
          />
          <button disabled={isInvalid} type="submit" className="passwordforget__form-button">
            Reset My Password
          </button>
        </div>
 
        {error && <p className="passwordforget__form-errortext">{error.message}</p>}
      </form>
    );
  }
}
 
export default PasswordForget;
 
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
 
export { PasswordForgetForm, PasswordForgetLink };