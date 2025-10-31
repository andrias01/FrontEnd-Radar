import { useEffect } from 'react'

import { ToastContainer } from '../ui/toast'
import { useNotificationStore } from '../../store/notificationStore'

const AUTO_DISMISS_MS = 4200

export const NotificationCenter = () => {
  const { toasts, dismiss } = useNotificationStore((state) => ({
    toasts: state.toasts,
    dismiss: state.dismiss,
  }))

  useEffect(() => {
    if (toasts.length === 0) return
    const timers = toasts.map((toast) =>
      window.setTimeout(() => {
        dismiss(toast.id)
      }, AUTO_DISMISS_MS),
    )
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [dismiss, toasts])

  return <ToastContainer toasts={toasts} onDismiss={dismiss} />
}
