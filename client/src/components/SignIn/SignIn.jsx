import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
 
import { SignUpLink } from '../SignUp/SignUp';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';
import { withFirebase } from '../Firebase/index';

import './SignIn.scss';
 
const SignInPage = () => (
  <div className="signin">
    <div className="signin__card">
      <h2 className="signin__header">Sign In</h2>
      <SignInForm />
      <PasswordForgetLink/>
      <SignUpLink />
    </div>
  </div>
);
 
class SignInFormBase extends Component {
 
    state ={
        email: '',
        password: '',
        username: '',
        error: null,
    }
 
  onSubmit = (e) => {
    const { email, password } = this.state;
 
    this.props.firebase
      .SignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(
            this.state
        );
        this.props.history.push('/home');
      })
      .catch(error => {
        this.setState({ error });
      });
 
    e.preventDefault();
  };
 
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
 
  render() {
    const { email, password, error } = this.state;
 
    const isInvalid = (password === '' || email === '');
 
    return (
      <form onSubmit={this.onSubmit} className="signin__form">
        <div className="signin__form-div1">
          <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          className="signin__form-input"
          />
          <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          className="signin__form-input"
          />
          <button disabled={isInvalid} type="submit" className="signin__form-button">
          Sign In
          </button>
        </div>
 
        {error && <p className="signin__form-errortext">{error.message}</p>}
      </form>
    );
  }
}
 
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
 
export default SignInPage;
 
export { SignInForm };