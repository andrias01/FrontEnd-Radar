import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'

import { mockRadarData } from '../../services/mockData'

export const RadarShowcase = (): JSX.Element => {
  return (
    <section id="analitica" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[color:var(--color-primary-light)]/40 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[color:var(--color-secondary)]/30 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)]">Analítica en acción</span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Visualizaciones dinámicas para decisiones confiables</h2>
          <p className="mt-4 text-base text-slate-600">
            RADAR permite combinar indicadores institucionales, evaluaciones empresariales y resultados académicos en un mismo ecosistema interactivo.
          </p>
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-white via-[color:var(--color-neutral)] to-white p-6 shadow-2xl">
            <div className="absolute -left-24 top-12 h-48 w-48 rounded-full bg-[color:var(--color-primary-light)]/60 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-[color:var(--color-secondary)]/50 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">Radar de competencias</p>
                  <p className="text-lg font-semibold text-slate-900">Comparativa actual</p>
                </div>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--color-primary)] shadow-sm">
                  Cohorte 2024
                </span>
              </div>
              <div className="mt-6 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={mockRadarData} outerRadius="70%">
                    <PolarGrid gridType="circle" stroke="#94a3b8" />
                    <PolarAngleAxis dataKey="name" tick={{ fill: '#334155', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#64748b', fontSize: 10 }} />
                    <Radar name="Competencias" dataKey="value" stroke="#0b7a75" fill="#0b7a75" fillOpacity={0.35} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {[{ title: 'Brechas educativas', description: 'Detecta divergencias entre el plan de estudios y las habilidades demandadas por las empresas en tiempo real.' }, { title: 'Beneficios para instituciones', description: 'Identifica fortalezas, ajusta la oferta académica y presenta evidencia objetiva de calidad educativa.' }, { title: 'Beneficios para empresas', description: 'Recibe perfiles ajustados, ahorra tiempo de entrenamiento y cuenta con rutas de evaluación estandarizadas.' }].map((item, index) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-transparent bg-[color:var(--color-neutral)]/70 p-6 shadow-inner transition hover:border-[color:var(--color-secondary)]/40 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--color-primary)]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
