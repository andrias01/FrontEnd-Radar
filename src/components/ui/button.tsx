import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react'
import { cloneElement, isValidElement } from 'react'

import { cn } from '../../utils/cn'

type Variant = 'default' | 'ghost' | 'outline' | 'secondary'
type Size = 'default' | 'sm' | 'lg'

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  loading?: boolean
  asChild?: boolean
}

const variantClasses: Record<Variant, string> = {
  default:
    'bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-emerald-400',
  ghost: 'bg-transparent text-emerald-600 hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-200',
  outline:
    'border border-emerald-200 text-emerald-700 hover:border-emerald-400 hover:text-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-200',
  secondary:
    'bg-white text-emerald-700 shadow-sm hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-200',
}

const sizeClasses: Record<Size, string> = {
  default: 'px-5 py-2 text-sm',
  sm: 'px-3 py-1.5 text-xs',
  lg: 'px-6 py-3 text-base',
}

export const Button = ({
  className,
  variant = 'default',
  size = 'default',
  loading = false,
  asChild = false,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus:outline-none disabled:cursor-not-allowed disabled:opacity-60',
    variantClasses[variant],
    sizeClasses[size],
    loading && 'pointer-events-none opacity-80',
    className,
  )

  if (asChild && isValidElement(children)) {
    const element = children as ReactElement<{ className?: string }>
    return cloneElement(element, {
      className: cn(element.props.className, classes),
    })
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && (
        <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/70 border-t-transparent" aria-hidden="true" />
      )}
      <span>{children}</span>
    </button>
  )
}
