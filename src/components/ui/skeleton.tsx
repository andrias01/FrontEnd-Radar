import type { HTMLAttributes } from 'react'

import { cn } from '../../utils/cn'

export const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('animate-pulse rounded-xl bg-slate-200/60 dark:bg-slate-700/60', className)} {...props} />
}
