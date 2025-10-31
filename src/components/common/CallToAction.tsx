import { Link } from 'react-router-dom'

export const CallToAction = (): JSX.Element => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-primary-light)] to-[color:var(--color-secondary)] p-[1px] shadow-2xl">
        <div className="rounded-3xl bg-white/95 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Eleva la calidad con datos accionables</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Conecta a tus aliados empresariales, configura formularios dinámicos y monitorea la evolución de tus estudiantes
            desde un solo panel. RADAR está listo para integrarse con tus microservicios y entornos existentes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[color:var(--color-primary-dark)]"
            >
              Iniciar sesión
            </Link>
            <a
              href="mailto:alianzas@radar.edu"
              className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-primary)] shadow"
            >
              Solicitar demostración
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
