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
    <>
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <h1 className="title is-1">🐙 Arkham Web</h1>
            <h3 className="title is-3">Sign In</h3>
            <div style={{ maxWidth: 400 }}>
              <SignInForm />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

const Footer = () => (
  <footer
    className="footer"
    style={{ position: "absolute", bottom: 0, width: "100%" }}
  >
    <div className="content has-text-centered">
      <p>
        A COVID-19-inspired project by{" "}
        <a href="https://twitter.com/CuriousMau">Mauro Gestoso</a>.
      </p>
    </div>
  </footer>
);

export default Landing;
