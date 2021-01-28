import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import PasswordForget from './components/PasswordForget/PasswordForget';
import Home from './components/Home/Home';
import Account from './components/Account/Account';
import SingleProduct from './components/SingleProduct/SingleProduct';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

import { withAuthentication } from './components/Session/Session';

class App extends React.Component{

  state={
    authUser: null,
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      }
    )
  }

  componentWillUnmount() {
    this.listener();
  }

  render(){
    return (
      <>
        <BrowserRouter>
          <Navigation />
            <Route exact path='/' component={Landing} />
            <Route path='/signup'component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/pw-forget' component={PasswordForget} />
            <Route exact path='/home' component={Home} />
            <Route path='/home/:id' component={SingleProduct} />
            <Route path='/account' component={Account} />
            <Route exact path='/shoppingcart' component={ShoppingCart} />
            <Route path='/shoppingcart/:productID' component={ShoppingCart} />
        </BrowserRouter>
      </>
    )
  }
}

export default withAuthentication(App);