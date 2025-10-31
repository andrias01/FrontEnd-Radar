import { BarChart3, Download, Users } from 'lucide-react'

const steps = [
  {
    title: 'Integra tus fuentes',
    description: 'Conecta sistemas académicos, evaluaciones empresariales y microservicios en minutos.',
    icon: Download,
  },
  {
    title: 'Explora insights',
    description: 'Visualiza brechas, tendencias y logros con tableros intuitivos para cada rol.',
    icon: BarChart3,
  },
  {
    title: 'Activa alianzas',
    description: 'Coordina acciones con empresas y equipos académicos desde un mismo flujo.',
    icon: Users,
  },
]

export const HowItWorks = (): JSX.Element => {
  return (
    <section id="como-funciona" className="bg-[color:var(--color-neutral)]/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)]">Cómo funciona</span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Una experiencia simple para todo el ecosistema</h2>
          <p className="mt-4 text-base text-slate-600">
            Inspirada en las plataformas más queridas por los usuarios, la navegación es clara, accesible y lista para acompañar decisiones estratégicas.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[28px] bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color:var(--color-primary-light)]/40 blur-3xl transition-opacity group-hover:opacity-60" />
              <div className="relative flex flex-col gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-neutral)] text-[color:var(--color-primary)]">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-primary)]">
                  Paso {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
