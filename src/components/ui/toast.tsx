import type { ReactNode } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../utils/cn'

type ToastProps = {
  toasts: Array<{ id: string; title: string; description?: string; tone?: 'success' | 'info' | 'warning' }>
  onDismiss: (id: string) => void
}

const toneStyles: Record<NonNullable<ToastProps['toasts'][number]['tone']>, string> = {
  success:
    'border-[color:var(--color-primary-light)]/70 bg-white/90 text-[color:var(--color-primary-dark)] dark:border-[color:var(--color-primary)]/40 dark:bg-slate-900/80 dark:text-white',
  info: 'border-sky-400/60 bg-white/90 text-sky-900 dark:bg-sky-950/80 dark:text-sky-100',
  warning: 'border-amber-400/60 bg-white/90 text-amber-900 dark:bg-amber-950/80 dark:text-amber-100',
}

export const ToastViewport = ({ children }: { children: ReactNode }) => (
  <div className="pointer-events-none fixed inset-0 flex items-start justify-center px-4 pt-6 md:justify-end md:px-6">
    <div className="flex w-full max-w-sm flex-col gap-3 md:items-end">{children}</div>
  </div>
)

export const ToastContainer = ({ toasts, onDismiss }: ToastProps) => {
  return (
    <ToastViewport>
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'pointer-events-auto overflow-hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur',
              toneStyles[toast.tone ?? 'success'],
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">{toast.title}</p>
                {toast.description && <p className="mt-1 text-xs text-slate-600 dark:text-slate-200">{toast.description}</p>}
              </div>
              <button
                type="button"
                onClick={() => onDismiss(toast.id)}
                className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--color-primary)] shadow dark:bg-slate-800/60 dark:text-[color:var(--color-accent)]"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </ToastViewport>
  )
}
