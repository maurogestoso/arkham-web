import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useFirebase, Firebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'

export default (props:RouteComponentProps) => {
  const firebase = useFirebase()!
  return (
    <div>
      <h1>SignIn</h1>
      <SignInForm {...props} firebase={firebase}/>
    </div>
  )
}

interface State {
  email: string
  password: string
  error: Error|null
}

const initialState:State = {
  email: '',
  password: '',
  error: null
}

type Props = {
  firebase: Firebase
} & RouteComponentProps

const SignInForm = ({firebase, history}:Props) => {
  const [state, setState] = useState<State>(initialState)
  const {email, password, error} = state

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    firebase?.doSignInWithEmailAndPassword(email, password)
      .then((user) => {
        setState(initialState)
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