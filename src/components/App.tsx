import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navigation from './Navigation'
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import HomePage from './Home';
import AccountPage from './Account';
import AdminPage from './Admin';

import * as ROUTES from '../constants/routes';
import { useAuthentication, userContext } from "../firebase/context";

export default () => {
  const {initializing, user} = useAuthentication()  
  return (
    <userContext.Provider value={{user}}>
      <App />
    </userContext.Provider>
  )
}

type Props = {}
export const App = (props: Props) => {
  return (
    <Router>
      <>
        <header>
          <Navigation />
        </header>

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </>
    </Router> 
  )
};
