import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import PasswordForget from './components/PasswordForget/PasswordForget';
import Home from './components/Home/Home';
import Account from './components/Account/Account';
import Admin from './components/Admin/Admin';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
          <Route exact path='/' component={Landing} />
          <Route path='/signup'component={SignUp} />
          <Route path='signin' component={SignIn} />
          <Route path='pw-forget' component={PasswordForget} />
          <Route path='home' component={Home} />
          <Route path='account' component={Account} />
          <Route path='admin' component={Admin} />
      </BrowserRouter>
    </>
  )
}