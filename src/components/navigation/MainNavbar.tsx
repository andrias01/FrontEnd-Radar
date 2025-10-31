import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Brechas', to: '/#brechas' },
  { label: 'Beneficios', to: '/#beneficios' },
  { label: 'Analítica', to: '/#analitica' },
  { label: 'Cómo funciona', to: '/#como-funciona' },
]

export const MainNavbar = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-3 text-lg font-semibold text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-primary)] text-base font-bold text-white shadow-md transition-transform group-hover:-translate-y-0.5">
            R
          </span>
          <span className="tracking-wide">RADAR</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 transition-colors hover:text-[color:var(--color-primary)] ${
                  isActive ? 'bg-[color:var(--color-primary-light)]/40 text-[color:var(--color-primary)]' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="rounded-full bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] px-5 py-2 text-white shadow-md shadow-[color:var(--color-primary)]/20 transition hover:shadow-lg"
          >
            Ingresar
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-4 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition-colors hover:bg-[color:var(--color-primary-light)]/40 ${
                    isActive ? 'text-[color:var(--color-primary)]' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] px-4 py-2 text-center text-white shadow"
            >
              Ingresar
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
