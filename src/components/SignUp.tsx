import React, { useState } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom';

import * as ROUTES from '../constants/routes'
import { Firebase, useFirebase } from '../firebase';

export default (props:RouteComponentProps) => {
  const firebase = useFirebase()!
  return (
    <div>
      <h1>SignUp</h1>
      <SignUpForm {...props} firebase={firebase}/>
    </div>
  )
}

type State = {
  username: string
  email: string
  passwordOne: string
  passwordTwo: string
  error: Error|null
}

const initialState:State = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

type Props = {
  firebase: Firebase
}  & RouteComponentProps

const SignUpForm = ({firebase, history}: Props) => {
  const [state, setState] = useState<State>(initialState)
  const {username, email, passwordOne, passwordTwo, error} = state
  
  function handleSubmit(e:React.FormEvent) {
    e.preventDefault()
    firebase?.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log({authUser})
        setState(initialState)
        history.push(ROUTES.HOME)
      })
      .catch((error: Error) => {
        setState({...state, error})
      })
  }
  
  function handleChange(e:React.SyntheticEvent) {
    const target = e.target as HTMLInputElement
    setState({
      ...state,
      [target.name]: target.value
    })
  }

  const isInvalid = passwordOne!==passwordTwo || !passwordOne || !email || !username

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={username} onChange={handleChange} placeholder="Name" />
      <input type="text" name="email" value={email} onChange={handleChange} placeholder="Email Address" />
      <input type="password" name="passwordOne" value={passwordOne} onChange={handleChange} placeholder="Password" />
      <input type="password" name="passwordTwo" value={passwordTwo} onChange={handleChange} placeholder="Confirm Password" />
      <button type="submit" disabled={isInvalid}>Sign Up</button>
      {error && <p>{error.message}</p>}
    </form>
  )
}

export const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)
