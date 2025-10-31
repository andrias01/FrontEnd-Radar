import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface CompetenciesTrendChartProps {
  data: Array<{ name: string; tecnologia: number; blandas: number }>
}

export const CompetenciesTrendChart = ({ data }: CompetenciesTrendChartProps): JSX.Element => {
  return (
    <div className="rounded-3xl border border-white/60 bg-white p-6 shadow">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Evolución de competencias</h3>
      <p className="text-xs text-slate-400">Puntajes promedio de competencias técnicas y blandas</p>
      <div className="mt-6 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} domain={[0, 5]} />
            <Tooltip contentStyle={{ borderRadius: 16, borderColor: '#e2e8f0' }} />
            <Legend verticalAlign="top" height={36} iconType="circle" iconSize={10} />
            <Line type="monotone" dataKey="tecnologia" name="Competencias técnicas" stroke="#008b50" strokeWidth={3} dot />
            <Line type="monotone" dataKey="blandas" name="Competencias blandas" stroke="#1d3475" strokeWidth={3} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
