import { Outlet } from 'react-router-dom'

import { DashboardNavbar } from '../components/navigation/DashboardNavbar'

export const DashboardLayout = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardNavbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
