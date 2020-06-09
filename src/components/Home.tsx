import React from 'react'
import { useAuthentication, userContext, useSession, useAuthorization } from '../firebase'

export default () => {
  const {initializing, user} = useAuthentication()
  useAuthorization(u => !!u)
  return (
    <userContext.Provider value={{user}}>
      <Home />
    </userContext.Provider>
  )
}

type Props = {}
export const Home = (props: Props) => {
  const user = useSession()
  return (
    <>
      <h1>Home</h1>
      <p>Your email: {user?.email}</p>
    </>
  )
}
