import { Facebook, Github, Linkedin, Mail } from 'lucide-react'

const footerLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/radar-analytics' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/radar-analytics' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/radar-analytics' },
  { icon: Mail, label: 'Contacto', href: 'mailto:contacto@radar.edu' },
]

export const SiteFooter = (): JSX.Element => {
  return (
    <footer className="border-t border-white/60 bg-gradient-to-br from-white via-[color:var(--color-neutral)] to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-primary)] text-sm font-semibold text-white shadow-md">
                R
              </span>
              <h3 className="text-2xl font-semibold text-slate-900">RADAR</h3>
            </div>
            <p className="max-w-lg text-sm text-slate-600">
              Inteligencia aplicada para conectar el desempeño real de los estudiantes con la promesa de valor de las instituciones educativas. Monitorea brechas, impulsa la calidad y fortalece alianzas con empresas.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-500">
              {['Analítica ética', 'Datos protegidos', 'Impacto sostenible'].map((item) => (
                <span key={item} className="rounded-full bg-white/80 px-3 py-1 shadow">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 text-sm text-slate-600 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">Contáctanos</h4>
              <p>Cra. 7 # 116 - 50, Bogotá D.C.</p>
              <p>+57 (1) 555 4455</p>
              <p>contacto@radar.edu</p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">Síguenos</h4>
              <div className="flex flex-wrap gap-3">
                {footerLinks.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 transition hover:text-[color:var(--color-primary)]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-neutral)] text-[color:var(--color-primary)] shadow">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/60 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} RADAR. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
