import { Link } from 'react-router-dom'

export const CallToAction = (): JSX.Element => {
  return (
    <section className="py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[42px] bg-gradient-to-br from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] p-[1px] shadow-2xl">
        <div className="relative rounded-[40px] bg-white/92 px-6 py-14 text-center shadow-xl sm:px-16">
          <div className="absolute -top-20 right-12 hidden h-36 w-36 rounded-full bg-white/40 blur-2xl sm:block" />
          <div className="absolute -bottom-16 left-10 hidden h-32 w-32 rounded-full bg-[color:var(--color-primary-light)]/40 blur-2xl sm:block" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-neutral)]/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--color-primary)]">
              Listo para integrarse
            </span>
            <h2 className="mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl">Eleva la calidad con datos accionables</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Conecta a tus aliados empresariales, configura formularios dinámicos y monitorea la evolución de tus estudiantes desde un solo panel.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Iniciar sesión
              </Link>
              <a
                href="mailto:alianzas@radar.edu"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-secondary)]/60 bg-white/90 px-6 py-3 text-sm font-semibold text-[color:var(--color-primary)] shadow"
              >
                Solicitar demostración
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-slate-500">
              {["Implementación guiada", 'Soporte multi-institución', 'Integraciones seguras'].map((item) => (
                <span key={item} className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
