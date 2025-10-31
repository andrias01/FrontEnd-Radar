import { Bell, LogOut, Settings } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

const adminLinks = [
  { label: 'Tablero Global', to: '/dashboard/admin' },
  { label: 'Configuración', to: '/dashboard/admin/configuration' },
]

const institutionLinks = [
  { label: 'Indicadores', to: '/dashboard/institution' },
  { label: 'Carga de datos', to: '/dashboard/institution/upload' },
]

export const DashboardNavbar = (): JSX.Element => {
  const { user, logout } = useAuth()
  const links = user?.role === 'admin' ? adminLinks : institutionLinks

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-white font-bold">
              R
            </span>
            RADAR Insights
          </Link>
          <nav className="hidden gap-2 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-slate-100 p-2 text-slate-500 hover:text-[color:var(--color-primary)]">
            <Bell className="h-4 w-4" />
          </button>
          <NavLink
            to={user?.role === 'admin' ? '/dashboard/admin/configuration' : '/dashboard/institution/upload'}
            className="hidden rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 md:flex md:items-center md:gap-2"
          >
            <Settings className="h-4 w-4" />
            Configurar
          </NavLink>
          <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm">
            <img src={user?.avatar} alt={user?.name} className="h-9 w-9 rounded-full object-cover" />
            <div className="hidden text-xs leading-tight sm:block">
              <div className="font-semibold text-slate-800">{user?.name}</div>
              <div className="text-slate-500">{user?.role === 'admin' ? 'Administrador' : 'Institución'}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={logout}
            className="flex items-center gap-1 rounded-full bg-[color:var(--color-primary)] px-3 py-2 text-sm font-medium text-white shadow hover:bg-[color:var(--color-primary-dark)]"
          >
            <LogOut className="h-4 w-4" />
            Salir
          </button>
        </div>
      </div>
    </header>
  )
}
