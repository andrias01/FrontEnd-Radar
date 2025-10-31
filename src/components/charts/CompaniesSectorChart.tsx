import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const COLORS = ['#008b50', '#1d3475', '#ffca00', '#04b5ac', '#e28210']

interface CompaniesSectorChartProps {
  data: Array<{ name: string; value: number }>
}

export const CompaniesSectorChart = ({ data }: CompaniesSectorChartProps): JSX.Element => {
  return (
    <div className="rounded-3xl border border-white/60 bg-white p-6 shadow">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Empresas por sector</h3>
      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={6}>
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `${value}%`} contentStyle={{ borderRadius: 16, borderColor: '#e2e8f0' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid gap-2 text-xs text-slate-500">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}
