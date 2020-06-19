import React from "react";
import { useAuthentication, userContext, useAuthorization } from "../firebase";
import Game from "./Game";

export default () => {
  const { initializing, user } = useAuthentication();
  useAuthorization((u) => !!u);
  if (initializing) {
    return <p>Counting tentacles...</p>;
  }
  return (
    <userContext.Provider value={{ user }}>
      <Game />
    </userContext.Provider>
  );
};
