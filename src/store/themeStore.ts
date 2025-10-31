import { useEffect } from 'react'

import { create } from 'zustand'

type Theme = 'light' | 'dark'

type ThemeState = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const STORAGE_KEY = 'radar.theme'

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'light',
  toggleTheme: () => {
    const next = get().theme === 'light' ? 'dark' : 'light'
    set({ theme: next })
    return next
  },
  setTheme: (theme) => set({ theme }),
}))

export const useThemeSync = () => {
  const { theme, setTheme } = useThemeStore((state) => ({ theme: state.theme, setTheme: state.setTheme }))

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Theme | null
    if (saved) {
      setTheme(saved)
    }
  }, [setTheme])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
}
