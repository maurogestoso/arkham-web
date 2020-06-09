import React from 'react'
import { useAuth, userContext, useSession } from '../Firebase/context'

export default () => {
  const {initializing, user} = useAuth()  
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
