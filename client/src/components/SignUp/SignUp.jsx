import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {compose} from 'recompose';
import { withFirebase } from '../Firebase/FirebaseContext';

import './SignUp.scss';
 
const SignUpPage = () => (
  <div className="signup">
    <div className="signup__card">
      <h2 className="signup__header">Sign Up</h2>
      <SignUpForm/>
    </div>
  </div>
);
 
class SignUpFormBase extends Component {

  state={
  username: '',
  email: '',
  initialPassword: '',
  confirmedPassword: '',
  error: null,
  }

  onSubmit = (e) => {
  const {email, initialPassword} = this.state;
 
  this.props.firebase
    .CreateUserWithEmailAndPassword(email, initialPassword)
    .then(() => {
      this.setState(this.state);
      this.props.history.push('/home')
    })
    .catch(error => {
      this.setState({ error });
    }); 
    e.preventDefault();
  }
 
  onChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  };
 
  render() {
    const {
      username,
      email,
      initialPassword,
      confirmedPassword,
      error,
    } = this.state;

    const isInvalid =
    (initialPassword !== confirmedPassword ||
    initialPassword === '' ||
    email === '' ||
    username === '');

    return (
      <form onSubmit={this.onSubmit} className="signup__form">
        <div className="signup__form-div1">
          <input name="username" 
          value={username} 
          onChange={this.onChange} 
          type="text" 
          placeholder="Full Name" 
          className="signup__form-input"
          />
          <input name="email" 
          value={email} 
          onChange={this.onChange} 
          type="text" 
          placeholder="Email Address" 
          className="signup__form-input"
          />
          <input name="initialPassword" 
          value={initialPassword} 
          onChange={this.onChange} 
          type="password" 
          placeholder="Password" 
          className="signup__form-input"
          />
          <input name="confirmedPassword" 
          value={confirmedPassword} 
          onChange={this.onChange} 
          type="password" 
          placeholder="Confirm Password" 
          className="signup__form-input" />
          <button disabled={isInvalid} type="submit" className="signup__form-button">Sign Up</button>
        </div>
     
        {error && <p className="signup__form-errortext">{error.message}</p>}
      </form>
    );
  }
}
 
const SignUpLink = () => (
    <p className="signup__text-signup-noaccount">Don't have an account? <Link to='/signup' className="signup__text-signup-noaccount-link">Sign Up</Link></p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
  )(SignUpFormBase);
 
export default SignUpPage;
 
export { SignUpForm, SignUpLink };