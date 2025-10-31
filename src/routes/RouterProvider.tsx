import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

import { DashboardLayout } from '../layouts/DashboardLayout'
import { LandingLayout } from '../layouts/LandingLayout'
import { ProtectedRoute } from '../components/navigation/ProtectedRoute'
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage'
import { AdminConfigPage } from '../pages/admin/AdminConfigPage'
import { InstitutionDashboardPage } from '../pages/institution/InstitutionDashboardPage'
import { InstitutionUploadPage } from '../pages/institution/InstitutionUploadPage'
import { LandingPage } from '../pages/landing/LandingPage'
import { LoginPage } from '../pages/login/LoginPage'
import { useAuth } from '../context/AuthContext'

const RouterConfig = () => {
  const { isAuthenticated, user } = useAuth()

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <LandingLayout />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: 'login', element: <LoginPage /> },
      ],
    },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute isAllowed={isAuthenticated} redirectTo="/login">
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element:
            user?.role === 'admin' ? (
              <Navigate to="/dashboard/admin" replace />
            ) : (
              <Navigate to="/dashboard/institution" replace />
            ),
        },
        {
          path: 'admin',
          element: (
            <ProtectedRoute isAllowed={user?.role === 'admin'} redirectTo="/dashboard">
              <AdminDashboardPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'admin/configuration',
          element: (
            <ProtectedRoute isAllowed={user?.role === 'admin'} redirectTo="/dashboard">
              <AdminConfigPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'institution',
          element: (
            <ProtectedRoute isAllowed={user?.role === 'institution'} redirectTo="/dashboard">
              <InstitutionDashboardPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'institution/upload',
          element: (
            <ProtectedRoute isAllowed={user?.role === 'institution'} redirectTo="/dashboard">
              <InstitutionUploadPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ]

  return useRoutes(routes)
}

export const RouterProvider = () => {
  return <RouterConfig />
}
