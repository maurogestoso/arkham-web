import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFirebase } from "../firebase";
import * as ROUTES from "../constants/routes";

interface State {
  email: string;
  password: string;
  error: Error | null;
}

const initialState: State = {
  email: "",
  password: "",
  error: null,
};

const SignInForm = () => {
  const firebase = useFirebase()!;
  const history = useHistory();
  const [state, setState] = useState<State>(initialState);
  const { email, password, error } = state;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    firebase?.doSignInWithEmailAndPassword(email, password).then((user) => {
      setState(initialState);
      console.log({ user });
      history.push(ROUTES.HOME);
    });
  };

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const isInvalid = !email || !password;

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email Address"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
      </div>
      <div className="control">
        <button className="button is-link" type="submit" disabled={isInvalid}>
          Sign In
        </button>
      </div>
      {error && <p>{error.message}</p>}
    </form>
  );
};

export default SignInForm;
