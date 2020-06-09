import React, { useContext } from "react";
import fb from "./";
import Firebase from './firebase'

const firebaseContext = React.createContext<Firebase | null>(null);

const useFirebase = () => useContext(firebaseContext)

type UserContext = {
  user: firebase.User | null
}
const userContext = React.createContext<UserContext>({
  user: null
})

const useSession = () => {
  const {user} = useContext(userContext)
  return user
}

export type AuthState = {
  initializing: boolean;
  user: firebase.User | null
}
const useAuth = () => {
  const [state, setState] = React.useState<AuthState>(() => {
    const user = fb.auth.currentUser
    return {
      initializing: !user,
      user
    }
  })

  function onChange(user:firebase.User | null) {
    setState({initializing: false, user})
  }

  React.useEffect(() => {
    const unsubscribe = fb.auth.onAuthStateChanged(onChange)
    return () => unsubscribe()
  }, [])

  return state
}

export {useAuth, useSession, userContext, firebaseContext, useFirebase}
