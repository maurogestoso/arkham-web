import React from 'react'
import { useFirebase, Firebase } from '../Firebase'

type Props = {
  firebase: Firebase
}
export const SignOutButton = ({firebase}: Props) => (
  <button type="button" onClick={firebase?.doSignOut}>Sign Out</button>
)

export default () => {
  const firebase = useFirebase()!
  return (
    <SignOutButton firebase={firebase}/>
  )
}
