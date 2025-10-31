import type { ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { useId } from 'react'

import { cn } from '../../utils/cn'

type SwitchProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string | null
}

export const Switch = ({ className, label = 'Modo oscuro', ...props }: SwitchProps) => {
  const id = useId()
  const { onChange, ...rest } = props
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event)
  }
  return (
    <label htmlFor={id} className={cn('relative inline-flex cursor-pointer items-center', className)}>
      <input id={id} type="checkbox" className="peer sr-only" onChange={handleChange} {...rest} />
      {label && <span className="mr-3 text-xs font-semibold text-emerald-600 peer-checked:text-slate-100">{label}</span>}
      <span className="h-6 w-10 rounded-full bg-emerald-200 transition-colors peer-checked:bg-emerald-500" />
      <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-all peer-checked:right-1 peer-checked:translate-x-4" />
    </label>
  )
}
