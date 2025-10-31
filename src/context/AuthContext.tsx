import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

import { authService } from '../services/authService'
import type { AuthCredentials, AuthProviderType, AuthState, User } from '../types/auth'

interface AuthContextValue extends AuthState {
  login: (provider: AuthProviderType, credentials?: AuthCredentials) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = Boolean(user)

  const login = useCallback(async (provider: AuthProviderType, credentials?: AuthCredentials) => {
    const authenticatedUser = await authService.authenticate(provider, credentials)
    setUser(authenticatedUser)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      login,
      logout,
    }),
    [user, isAuthenticated, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
