import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { motion } from 'framer-motion'

import { cn } from '../../utils/cn'
import { Button } from '../ui/button'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Brechas', to: '/#brechas' },
  { label: 'Beneficios', to: '/#beneficios' },
  { label: 'Analítica', to: '/#analitica' },
  { label: 'Cómo funciona', to: '/#como-funciona' },
]

export const MainNavbar = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        'sticky top-0 z-50 border-b border-transparent backdrop-blur transition-all duration-500',
        scrolled
          ? 'border-white/50 bg-white/90 shadow-lg shadow-[color:var(--color-primary)]/5 dark:border-slate-800/70 dark:bg-slate-900/80'
          : 'bg-transparent',
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-primary)] text-base font-bold text-white shadow-md transition-transform duration-300 group-hover:-translate-y-0.5">
            R
          </span>
          <span className="tracking-wide">RADAR</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3 py-2 transition-all hover:text-[color:var(--color-primary)] dark:hover:text-[color:var(--color-accent)]',
                  isActive &&
                    'bg-[color:var(--color-primary-light)]/50 text-[color:var(--color-primary)] shadow-sm dark:bg-[color:var(--color-primary)]/10 dark:text-[color:var(--color-accent)]',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <Button asChild>
            <Link to="/login">Ingresar</Link>
          </Button>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-slate-700 dark:text-slate-300 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur transition-all dark:border-slate-800 dark:bg-slate-900/95 md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-4 text-sm font-medium text-slate-700 dark:text-slate-200">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2 transition-colors hover:bg-[color:var(--color-primary-light)]/40 dark:hover:bg-[color:var(--color-primary)]/10',
                    isActive && 'text-[color:var(--color-primary)] dark:text-[color:var(--color-accent)]',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="py-2">
              <ThemeToggle />
            </div>
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
    </motion.header>
  )
}
