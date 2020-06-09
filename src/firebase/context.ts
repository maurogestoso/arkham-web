import React, { useContext, useEffect } from "react";
import fb from "./index";
import Firebase from "./firebase";
import { useHistory } from "react-router-dom";

import * as ROUTES from "../constants/routes";

export const firebaseContext = React.createContext<Firebase | null>(null);

export const useFirebase = () => useContext(firebaseContext);

type UserContext = {
  user: firebase.User | null;
};

export const userContext = React.createContext<UserContext>({
  user: null,
});

export const useSession = () => {
  const { user } = useContext(userContext);
  return user;
};

export type AuthState = {
  initializing: boolean;
  user: firebase.User | null;
};

export const useAuthentication = () => {
  const [state, setState] = React.useState<AuthState>(() => {
    const user = fb.auth.currentUser;
    return {
      initializing: !user,
      user,
    };
  });

  function onChange(user: firebase.User | null) {
    setState({ initializing: false, user });
  }

  React.useEffect(() => {
    const unsubscribe = fb.auth.onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return state;
};

export const useAuthorization = (
  condition: (u: firebase.User | null) => boolean
) => {
  const history = useHistory();
  useEffect(() => {
    const unsubscribe = fb.auth.onAuthStateChanged((authUser) => {
      if (!condition(authUser)) {
        history.push(ROUTES.SIGN_IN);
      }
    });
    return () => unsubscribe();
  }, []);
};
