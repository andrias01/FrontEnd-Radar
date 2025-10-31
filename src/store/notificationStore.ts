import { nanoid } from '../utils/nanoid'
import { create } from 'zustand'

type NotificationTone = 'success' | 'info' | 'warning'

type Notification = {
  id: string
  title: string
  description?: string
  tone?: NotificationTone
}

type NotificationState = {
  toasts: Notification[]
  push: (toast: Omit<Notification, 'id'> & { id?: string }) => void
  dismiss: (id: string) => void
  clear: () => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
  toasts: [],
  push: (toast) =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        {
          id: toast.id ?? nanoid(),
          tone: toast.tone ?? 'success',
          title: toast.title,
          description: toast.description,
        },
      ],
    })),
  dismiss: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
  clear: () => set({ toasts: [] }),
}))
