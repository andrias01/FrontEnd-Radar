import { Outlet } from 'react-router-dom'

import { MainNavbar } from '../components/navigation/MainNavbar'
import { SiteFooter } from '../layouts/SiteFooter'

export const LandingLayout = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-white via-slate-50 to-[color:var(--color-neutral)] dark:from-[#071311] dark:via-[#0c1d1a] dark:to-[color:var(--color-neutral)]">
      <MainNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
