import { Navigate } from 'react-router-dom'
import type { ReactElement } from 'react'

interface ProtectedRouteProps {
  isAllowed: boolean
  redirectTo: string
  children: ReactElement
}

export const ProtectedRoute = ({ isAllowed, redirectTo, children }: ProtectedRouteProps): JSX.Element => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />
  }
  return children
}
