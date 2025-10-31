import type { ReactNode } from 'react'
import { useEffect } from 'react'

import { useThemeSync, useThemeStore } from '../store/themeStore'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useThemeSync()
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return <>{children}</>
}
