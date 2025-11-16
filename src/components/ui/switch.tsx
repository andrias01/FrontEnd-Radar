import type { InputHTMLAttributes } from 'react'

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export const Switch = ({ label, ...props }: SwitchProps) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input type="checkbox" className="peer sr-only" {...props} />
      {label && <span className="mr-3 text-xs font-semibold text-[color:var(--color-primary)] peer-checked:text-slate-100">{label}</span>}
      <span className="h-6 w-10 rounded-full bg-[color:var(--color-primary-light)]/50 transition-colors peer-checked:bg-[color:var(--color-primary)]" />
    </label>
  )
}
