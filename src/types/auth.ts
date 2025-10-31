export type UserRole = 'admin' | 'institution'
export type AuthProviderType = 'google' | 'github' | 'facebook' | 'manual'

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: UserRole
  institutionId?: string
}

export interface AuthCredentials {
  email: string
  password: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}
