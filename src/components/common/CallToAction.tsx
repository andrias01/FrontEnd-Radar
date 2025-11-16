import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { Button } from '../ui/button'
import { AnimatedSection } from './AnimatedSection'

export const CallToAction = (): JSX.Element => {
  return (
    <AnimatedSection className="px-4 py-24 sm:px-0">
      <motion.div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[42px] bg-gradient-to-br from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] p-[1px] shadow-2xl"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative rounded-[40px] bg-white/92 px-6 py-12 text-center shadow-xl sm:px-16 sm:py-14 dark:bg-slate-900/80">
          <div className="absolute -top-20 right-12 hidden h-36 w-36 rounded-full bg-white/40 blur-2xl sm:block dark:bg-[color:var(--color-primary)]/15" />
          <div className="absolute -bottom-16 left-10 hidden h-32 w-32 rounded-full bg-[color:var(--color-primary-light)]/40 blur-2xl sm:block dark:bg-[color:var(--color-primary)]/10" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-neutral)]/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--color-primary)] dark:bg-[color:var(--color-primary)]/10 dark:text-[color:var(--color-accent)]">
              Listo para integrarse
            </span>
            <h2 className="mt-5 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Eleva la calidad con datos accionables</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
              Conecta a tus aliados empresariales, configura formularios dinámicos y monitorea la evolución de tus estudiantes desde un solo panel.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/login">Iniciar sesión</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-white/90 text-[color:var(--color-primary)] hover:text-[color:var(--color-accent)] dark:border-[color:var(--color-primary)]/40 dark:bg-slate-900/60 dark:text-[color:var(--color-accent)] sm:w-auto"
                asChild
              >
                <a href="mailto:alianzas@radar.edu">Solicitar demostración</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-slate-500 dark:text-slate-300">
              {["Implementación guiada", 'Soporte multi-institución', 'Integraciones seguras'].map((item) => (
                <span key={item} className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow dark:bg-slate-900/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)] dark:bg-[color:var(--color-accent)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
