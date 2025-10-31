import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

import { mockRadarData } from '../../services/mockData'

export const RadarShowcase = (): JSX.Element => {
  return (
    <section id="analitica" className="bg-gradient-to-br from-white via-slate-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)]">Analítica en
            acción</span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Visualizaciones dinámicas para decisiones
            confiables</h2>
          <p className="mt-4 text-base text-slate-600">
            RADAR permite combinar indicadores institucionales, evaluaciones empresariales y resultados académicos en un
            mismo ecosistema interactivo.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)]">
              Radar de competencias
            </h3>
            <div className="mt-6 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={mockRadarData} outerRadius="70%">
                  <PolarGrid gridType="circle" stroke="#94a3b8" />
                  <PolarAngleAxis dataKey="name" tick={{ fill: '#334155', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#64748b', fontSize: 10 }} />
                  <Radar
                    name="Competencias"
                    dataKey="value"
                    stroke="#008b50"
                    fill="#008b50"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid gap-6">
            {[{ title: 'Brechas educativas', description: 'Detecta divergencias entre el plan de estudios y las habilidades demandadas por las empresas en tiempo real.' }, { title: 'Beneficios para instituciones', description: 'Identifica fortalezas, ajusta la oferta académica y presenta evidencia objetiva de calidad educativa.' }, { title: 'Beneficios para empresas', description: 'Recibe perfiles ajustados, ahorra tiempo de entrenamiento y cuenta con rutas de evaluación estandarizadas.' }].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
