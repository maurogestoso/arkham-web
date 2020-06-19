import React from "react";

import { useSession, useFirebase } from "../firebase";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

export default () => {
  const user = useSession();
  const firebase = useFirebase()!;
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-item">
          <h3 className="title is-3">🐙 Arkham</h3>
        </div>
      </div>
      <div className="navbar-menu">
        {user && (
          <div className="navbar-end">
            <Link className="navbar-item" to={ROUTES.HOME}>
              Home
            </Link>
            <Link className="navbar-item" to={ROUTES.ACCOUNT}>
              Account
            </Link>
            <div className="navbar-item">
              <button
                className="button is-danger"
                type="button"
                onClick={firebase?.doSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
