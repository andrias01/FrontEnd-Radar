import type { LucideIcon } from 'lucide-react'

interface SocialLoginButtonProps {
  icon: LucideIcon
  label: string
  onClick: () => void
  variant?: 'outline' | 'solid'
}

export const SocialLoginButton = ({ icon: Icon, label, onClick, variant = 'outline' }: SocialLoginButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        variant === 'solid'
          ? 'bg-[color:var(--color-primary)] text-white shadow hover:bg-[color:var(--color-primary-dark)]'
          : 'border border-slate-200 bg-white text-slate-700 hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]'
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  )
}
