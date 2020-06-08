import React from 'react'
import { AuthUser } from '../Firebase/firebase'

const AuthUserContext = React.createContext<AuthUser|null>(null)

export {AuthUserContext}