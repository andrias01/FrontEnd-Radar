import { Moon, Sun } from 'lucide-react'

import { Switch } from '../ui/switch'
import { useThemeStore } from '../../store/themeStore'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore((state) => ({ theme: state.theme, toggleTheme: state.toggleTheme }))

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-amber-500" aria-hidden="true" />
      <Switch checked={theme === 'dark'} onChange={() => toggleTheme()} label={null} aria-label="Alternar modo oscuro" />
      <Moon className="h-4 w-4 text-slate-500" aria-hidden="true" />
    </div>
  )
}
