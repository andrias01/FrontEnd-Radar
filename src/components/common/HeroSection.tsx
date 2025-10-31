import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroHighlights = [
  'Alertas de brecha en tiempo real',
  'Integración con microservicios institucionales',
  'Ecosistema colaborativo con empresas aliadas',
]

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(81,196,183,0.25),_transparent_55%),_linear-gradient(180deg,_#f5fbf9_0%,_#ffffff_60%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[color:var(--color-secondary)]/50 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-80px] h-[420px] w-[420px] rounded-full bg-[color:var(--color-primary)]/40 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div className="relative space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] shadow-sm ring-1 ring-[color:var(--color-secondary)]/40">
            <ShieldCheck className="h-4 w-4" />
            Analítica estratégica educativa
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              RADAR alinea la promesa académica con el impacto real en el mercado laboral.
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Visualiza brechas, activa planes de mejora y coordina a tus aliados empresariales con una experiencia inspirada en las plataformas más intuitivas.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[color:var(--color-primary)]/30 transition hover:-translate-y-0.5"
            >
              Explorar tableros
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#analitica"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-secondary)]/60 bg-white/80 px-6 py-3 text-sm font-semibold text-[color:var(--color-primary)] shadow-sm transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              Ver analítica
              <PlayCircle className="h-4 w-4" />
            </a>
          </div>
          <ul className="flex flex-wrap gap-3 text-sm text-slate-500">
            {heroHighlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="grid gap-4 sm:grid-cols-3">
            {[{ label: 'Instituciones conectadas', value: '38+' }, { label: 'Empresas aliadas', value: '120+' }, { label: 'Evaluaciones al año', value: '4.500+' }].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/90 p-4 text-center shadow-md ring-1 ring-white/70"
              >
                <div className="text-xl font-semibold text-[color:var(--color-primary)]">{stat.value}</div>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -translate-y-6 scale-105 rounded-[44px] bg-gradient-to-br from-white/70 via-[color:var(--color-secondary)]/20 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/95 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Panel RADAR Insight</p>
                <p className="text-lg font-semibold text-slate-900">Trimestre actual</p>
              </div>
              <span className="rounded-full bg-[color:var(--color-primary-light)]/70 px-3 py-1 text-xs font-semibold text-[color:var(--color-primary-dark)]">
                Live
              </span>
            </div>
            <div className="mt-6 grid gap-4">
              {[{ title: 'Brecha promedio', value: '12%', trend: '+3.2%' }, { title: 'Competencias destacadas', value: 'Trabajo en equipo · Comunicación' }, { title: 'Índice de contratación', value: '68%' }].map((item) => (
                <div key={item.title} className="rounded-2xl bg-[color:var(--color-neutral)]/80 p-4 shadow-inner">
                  <div className="text-[11px] font-medium uppercase tracking-widest text-slate-500">{item.title}</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</div>
                  {item.trend && (
                    <div className="text-xs text-[color:var(--color-accent)]">{item.trend} respecto al año anterior</div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] p-5 text-white shadow-xl">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest">
                <span>Alertas tempranas</span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold">Brecha crítica</span>
              </div>
              <div>
                <p className="text-lg font-semibold">Programas destacados</p>
                <p className="text-sm text-white/80">Ingeniería de Sistemas · Administración</p>
              </div>
              <div className="flex items-center justify-between text-xs text-white/80">
                <span>Próxima revisión</span>
                <span>15 días</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/80 p-4 text-xs text-slate-500">
              <div>
                <p className="font-semibold text-[color:var(--color-primary-dark)]">Integración activa</p>
                <p>API · CRM · LMS</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[color:var(--color-primary)]" />
                Sincronizado hace 5 min
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
