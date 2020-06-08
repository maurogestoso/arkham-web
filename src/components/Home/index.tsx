import React from 'react'
import { AuthUserContext } from '../Session'
import { AuthUser } from '../Firebase/firebase'

const Home = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => <HomeBase authUser={authUser} />}
    </AuthUserContext.Consumer>
  </div>
)

type HomeBaseProps = {authUser:AuthUser}

const HomeBase = ({authUser}:HomeBaseProps) => (
  <>
    <h1>Home</h1>
    <p>Your email: {authUser?.email}</p>
  </>
)

export default Home