import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {compose} from 'recompose';
import { withFirebase } from '../Firebase/FirebaseContext';

import './SignUp.scss';
 
const SignUpPage = () => (
  <div className="signup">
    <h1 className="signup__text-signup">SignUp</h1>
    <SignUpForm/>
  </div>
);
 
class SignUpFormBase extends Component {

    state={
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    }

    onSubmit = (e) => {
    const {email, passwordOne } = this.state;
 
    this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
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
            passwordOne,
            passwordTwo,
            error,
          } = this.state;

        const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

        return (
            <form onSubmit={this.onSubmit}>
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            <button disabled={isInvalid} type="submit">Sign Up</button>
     
            {error && <p>{error.message}</p>}
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