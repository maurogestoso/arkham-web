import React, { useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import FirebaseContext, { WithFirebaseProps } from '../Firebase/context'
import * as ROUTES from '../../constants/routes'

const SignInPage = (props:RouteComponentProps) => (
  <div>
    <h1>SignIn</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignInForm {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
  </div>
)

interface SignInFormBaseState {
  email: string
  password: string
  error: Error|null
}

const initialSignInFormBaseState:SignInFormBaseState = {
  email: '',
  password: '',
  error: null
}

type SignInFormBaseProps = {} & WithFirebaseProps & RouteComponentProps

const SignInFormBase = ({firebase, history}:SignInFormBaseProps) => {
  const [state, setState] = useState<SignInFormBaseState>(initialSignInFormBaseState)
  const {email, password, error} = state

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    firebase?.doSignInWithEmailAndPassword(email, password)
      .then((user) => {
        setState(initialSignInFormBaseState)
        console.log({user})
        history.push(ROUTES.HOME)
      })
  }

  const handleChange = (e:React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement
    setState({
      ...state,
      [target.name]: target.value
    })
  }

  const isInvalid = !email || !password

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" value={email} onChange={handleChange} placeholder="Email Address" />
      <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
      <button type="submit" disabled={isInvalid}>Sign In</button>
      {error && <p>{error.message}</p>}
    </form>
  )
}

const SignInForm = withRouter(SignInFormBase)

export default SignInPage

export {SignInForm}