import React from 'react'
import { useAuthorization } from '../firebase'

const Account = () => {
  useAuthorization(u => !!u)
  return (
    <div>
      <h1>Account</h1>
    </div>
  )
}

export default Account