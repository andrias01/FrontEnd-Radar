import { mockUsers } from './mockData'
import type { AuthCredentials, AuthProviderType, User } from '../types/auth'

const simulateNetworkDelay = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms))

const findUserByProvider = (provider: AuthProviderType): User | null => {
  const [user] = mockUsers.filter((candidate) => candidate.providers.includes(provider))
  return user ? { ...user } : null
}

const findUserByCredentials = (credentials?: AuthCredentials): User | null => {
  if (!credentials) return null
  const { email, password } = credentials
  const user = mockUsers.find((candidate) => candidate.email === email && candidate.password === password)
  return user ? { ...user } : null
}

export const authService = {
  async authenticate(provider: AuthProviderType, credentials?: AuthCredentials): Promise<User> {
    await simulateNetworkDelay()

    const baseUser = provider === 'manual' ? findUserByCredentials(credentials) : findUserByProvider(provider)

    if (!baseUser) {
      throw new Error('No se pudo autenticar al usuario con las credenciales proporcionadas.')
    }

    const { password: _password, providers, ...user } = baseUser
    return user
  },
}
