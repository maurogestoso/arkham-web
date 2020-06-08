import React from 'react'
import FirebaseContext, { WithFirebaseProps } from '../Firebase/context'

const SignOutButtonBase = ({firebase}:WithFirebaseProps) => (
  <button type="button" onClick={firebase?.doSignOut}>Sign Out</button>
)

const SignOutButton = () => (
  <FirebaseContext.Consumer>
      {firebase => <SignOutButtonBase firebase={firebase}/>}
    </FirebaseContext.Consumer>
)

export default SignOutButton