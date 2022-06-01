import { createContext, useEffect, useState } from 'react'
import { getUserProfile } from '@services/User';
import { getAccessToken } from '@helpers/auth';
import { User } from '../models/User';

interface IAuthContext{
  user: User | null
  loading: boolean
}

interface IState{
  user: User | null
  loading: boolean
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  loading: false
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<IState>({
    user: null,
    loading: true
  })
  const accessToken = getAccessToken()

  useEffect(() => {
    accessToken && getUserProfile(accessToken)
      .then(response => {
        setUser({
          user: response,
          loading: false
        })
      })
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
