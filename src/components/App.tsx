import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./Landing";
import HomePage from "./Home";
import AccountPage from "./Account";

import * as ROUTES from "../constants/routes";
import { useAuthentication, userContext } from "../firebase/context";

export default () => {
  const { user } = useAuthentication();
  return (
    <userContext.Provider value={{ user }}>
      <App />
    </userContext.Provider>
  );
};

type Props = {};
export const App = (props: Props) => {
  return (
    <Router>
      <>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      </>
    </Router>
  );
};
