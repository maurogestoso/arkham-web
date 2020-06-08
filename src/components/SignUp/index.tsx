import React, { useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import * as ROUTES from '../../constants/routes'
import FirebaseContext, { WithFirebaseProps } from '../Firebase/context';


const SignUpPage = (props:RouteComponentProps) => (
  <div>
    <h1>SignUp</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
  </div>
)

type SignUpFormState = {
  username: string
  email: string
  passwordOne: string
  passwordTwo: string
  error: Error|null
}

const initialSignUpFormState:SignUpFormState = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

type SignUpFormProps = {} & WithFirebaseProps & RouteComponentProps

const SignUpFormBase = ({firebase, history}:SignUpFormProps) => {
  const [state, setState] = useState<SignUpFormState>(initialSignUpFormState)
  const {username, email, passwordOne, passwordTwo, error} = state
  function handleSubmit(e:React.FormEvent) {
    e.preventDefault()
    firebase?.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log({authUser})
        setState(initialSignUpFormState)
        history.push(ROUTES.HOME)
      })
      .catch(error => {
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

const SignUpForm = withRouter(SignUpFormBase)

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)

export default SignUpPage
export {SignUpForm, SignUpLink}