import { Facebook, Github, Linkedin, Mail } from 'lucide-react'

const footerLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/radar-analytics' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/radar-analytics' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/radar-analytics' },
  { icon: Mail, label: 'Contacto', href: 'mailto:contacto@radar.edu' },
]

export const SiteFooter = (): JSX.Element => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">RADAR</h3>
            <p className="max-w-md text-sm text-slate-600">
              Inteligencia aplicada para conectar el desempeño real de los estudiantes con la promesa de valor de
              las instituciones educativas. Monitorea brechas, impulsa la calidad y fortalece alianzas con empresas.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
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
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} RADAR. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
