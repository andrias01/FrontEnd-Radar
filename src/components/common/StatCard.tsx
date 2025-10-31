import { ArrowDown, ArrowUp } from 'lucide-react'

import { Skeleton } from '../ui/skeleton'

interface StatCardProps {
  label: string
  value: string | number
  trend?: number
  description?: string
  loading?: boolean
}

export const StatCard = ({ label, value, trend, description, loading = false }: StatCardProps): JSX.Element => {
  const TrendIcon = trend !== undefined && trend >= 0 ? ArrowUp : ArrowDown
  const trendColor = trend !== undefined && trend >= 0 ? 'text-[color:var(--color-primary)]' : 'text-red-500'

  return (
    <div className="flex flex-col rounded-3xl border border-white/60 bg-white p-6 shadow dark:border-slate-800/60 dark:bg-slate-900/70">
      <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">{label}</span>
      {loading ? (
        <div className="mt-3 space-y-3">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      ) : (
        <>
          <div className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{value}</div>
          {trend !== undefined && (
            <div className={`mt-2 flex items-center gap-2 text-xs font-semibold ${trendColor}`}>
              <TrendIcon className="h-4 w-4" />
              {Math.abs(trend)}% vs. periodo anterior
            </div>
          )}
          {description && <p className="mt-3 text-xs text-slate-500 dark:text-slate-300">{description}</p>}
        </>
      )}
    </div>
  )
}
