import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface PracticeHireChartProps {
  data: Array<{ name: string; practice: number; hired: number }>
}

export const PracticeHireChart = ({ data }: PracticeHireChartProps): JSX.Element => {
  return (
    <div className="rounded-3xl border border-white/60 bg-white p-6 shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Prácticas vs contratados</h3>
          <p className="text-xs text-slate-400">Seguimiento anual de contratación posterior a la práctica.</p>
        </div>
      </div>
      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPractice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#008b50" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#008b50" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorHired" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1d3475" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1d3475" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ borderRadius: 16, borderColor: '#e2e8f0' }} />
            <Area type="monotone" dataKey="practice" stroke="#008b50" fillOpacity={1} fill="url(#colorPractice)" />
            <Area type="monotone" dataKey="hired" stroke="#1d3475" fillOpacity={1} fill="url(#colorHired)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
