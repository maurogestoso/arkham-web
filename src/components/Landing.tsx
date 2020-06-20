import React from "react";
import SignInForm from "./SignIn";
import { useAuthentication } from "../firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Landing = () => {
  const { user, initializing } = useAuthentication();
  const history = useHistory();

  if (user) {
    history.push(ROUTES.HOME);
  }

  if (initializing) {
    return <p>Counting tentacles...</p>;
  }

  return (
    <div>
      <h1 className="title is-1">🐙 Arkham Web</h1>
      <h3 className="title is-3">Sign In</h3>
      <SignInForm />
    </div>
  );
};

export default Landing;
