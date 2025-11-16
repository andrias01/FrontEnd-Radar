import { motion } from 'framer-motion'
import { Globe2, LineChart, Sparkles } from 'lucide-react'

import { AnimatedSection } from '../common/AnimatedSection'

const highlights = [
  {
    title: 'Experiencia inmersiva',
    description: 'Interfaces limpias, microinteracciones suaves y foco en la acción, inspiradas en plataformas como TooGoodToGo.',
    icon: Sparkles,
  },
  {
    title: 'Territorios conectados',
    description: 'Mapea la cobertura de alianzas y detecta oportunidades de expansión con visualizaciones ligeras.',
    icon: Globe2,
  },
  {
    title: 'Impacto medible',
    description: 'Tableros listos para juntas directivas con métricas claras de empleabilidad y pertinencia.',
    icon: LineChart,
  },
]

export const ImpactHighlights = (): JSX.Element => {
  return (
    <AnimatedSection className="relative overflow-hidden bg-white py-24 dark:bg-[#04110f]">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-[radial-gradient(circle,_rgba(81,196,183,0.15),_transparent_60%)] dark:bg-[radial-gradient(circle,_rgba(42,209,163,0.12),_transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-neutral)]/90 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--color-primary)] dark:bg-[color:var(--color-primary)]/10 dark:text-[color:var(--color-accent)]">
              Experiencia RADAR
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Diseño cuidado para impulsar la confianza</h2>
            <p className="text-base text-slate-600 dark:text-slate-200">
              Cada interacción en RADAR está optimizada para ser clara, humana e inspiradora. Desde la paleta en tonos aqua hasta los gradientes suaves, la experiencia transmite innovación responsable.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-300">
              {['Modo oscuro opcional', 'Accesibilidad AA', 'Responsive first'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-neutral)] px-4 py-2 dark:bg-slate-900/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)] dark:bg-[color:var(--color-accent)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map(({ title, description, icon: Icon }, index) => (
              <motion.div
                key={title}
                className="group relative overflow-hidden rounded-[28px] border border-transparent bg-[color:var(--color-neutral)]/80 p-6 shadow-inner transition hover:border-[color:var(--color-secondary)]/40 hover:shadow-xl dark:bg-slate-900/70"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[color:var(--color-secondary)]/40 blur-3xl transition-opacity group-hover:opacity-60" />
                <div className="relative space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[color:var(--color-primary)] shadow dark:bg-slate-800/80 dark:text-[color:var(--color-accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
