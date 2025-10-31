import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[color:var(--color-neutral)] to-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-[color:var(--color-primary)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[color:var(--color-secondary)] blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="relative space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            Analítica estratégica educativa
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            RADAR conecta el perfil académico con el desempeño real en las empresas.
          </h1>
          <p className="text-lg text-slate-600">
            Detectamos brechas entre la formación y el mercado laboral para impulsar decisiones basadas en datos, elevar
            la empleabilidad y fortalecer alianzas con empresas líderes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[color:var(--color-primary)]/20 hover:bg-[color:var(--color-primary-dark)]"
            >
              Explorar tableros
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#analitica"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
            >
              Ver analítica
              <TrendingUp className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[{ label: 'Instituciones conectadas', value: '38+' }, { label: 'Empresas aliadas', value: '120+' }, { label: 'Evaluaciones al año', value: '4.500+' }].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/60 bg-white/80 p-4 text-center shadow">
                <div className="text-xl font-semibold text-[color:var(--color-primary)]">{stat.value}</div>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-10 top-10 hidden h-72 w-72 rounded-3xl border border-white/40 bg-[color:var(--color-primary)]/20 blur-2xl lg:block" />
          <div className="relative rounded-3xl border border-white/60 bg-white/90 p-6 shadow-2xl backdrop-blur">
            <h3 className="text-sm font-semibold text-[color:var(--color-primary)]">Panel RADAR Insight</h3>
            <p className="mt-1 text-xs text-slate-500">Indicadores sintetizados del desempeño institucional.</p>
            <div className="mt-6 grid gap-4">
              {[{ title: 'Brecha promedio', value: '12%', trend: '+3.2%' }, { title: 'Competencias destacadas', value: 'Trabajo en equipo · Comunicación' }, { title: 'Índice de contratación', value: '68%' }].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50/80 p-4 shadow-inner">
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{item.title}</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</div>
                  {item.trend && <div className="text-xs text-[color:var(--color-primary)]">{item.trend} respecto al año anterior</div>}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-light)] p-4 text-white">
              <div className="text-xs uppercase tracking-widest">Alertas tempranas</div>
              <div className="mt-2 text-lg font-semibold">Programas con brecha crítica detectados</div>
              <p className="text-xs text-white/80">Ingeniería de Sistemas · Administración</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
