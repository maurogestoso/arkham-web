import React from "react";
import Firebase from "./firebase";

const FirebaseContext = React.createContext<Firebase | null>(null);

export interface WithFirebaseProps {
  firebase: Firebase | null
}

export default FirebaseContext;
