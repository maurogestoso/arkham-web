import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navigation from '../Navigation'
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import { AuthUser } from "../Firebase/firebase";
import { FirebaseContext } from "../Firebase";
import { WithFirebaseProps } from "../Firebase/context";
import { AuthUserContext } from "../Session";

const App = () => (
  <FirebaseContext.Consumer>
    {firebase => <AppBase firebase={firebase} />}
  </FirebaseContext.Consumer>
)

type AppBaseProps = {} & WithFirebaseProps

const AppBase = ({firebase}:AppBaseProps) => {
  const [authUser, setAuthUser] = useState<AuthUser>(null)
  useEffect(() => {
    const unsubscribe = firebase?.auth.onAuthStateChanged(authUser => {
      authUser ? setAuthUser(authUser) : setAuthUser(null)
    })
    return function cleanup() {
      unsubscribe && unsubscribe()
    }
  }, [])
  return (
    <AuthUserContext.Provider value={authUser}>
      <Router>
        <div>
          <Navigation />
          
          <hr />

          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router> 
    </AuthUserContext.Provider>
  )
};


export default App;
