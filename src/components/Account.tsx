import React from 'react'
import { useAuthorization, userContext, useAuthentication, useSession } from '../firebase'

export default () => {
  const {initializing, user} = useAuthentication()
  useAuthorization(u => !!u)
  if (initializing) {
    return (
      <p>Counting tentacles...</p>
    )
  }
  return (
    <userContext.Provider value={{user}}>
      <Account />
    </userContext.Provider>
  )
}

type Props = {}
const Account = (props: Props) => {
  const user = useSession()
  return (
    <div>
      <h1>Account</h1>
      <p>Your email: {user?.email}</p>
    </div>
  )
}
