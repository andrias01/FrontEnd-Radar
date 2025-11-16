import { motion } from 'framer-motion'

import { AnimatedSection } from './AnimatedSection'

interface InformativeSectionProps {
  id?: string
  eyebrow: string
  title: string
  description: string
  items: Array<{ title: string; description: string }>
}

const gradients = [
  'from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-primary)]',
  'from-[#8fd4c4] via-[#51c4b7] to-[#2f9c95]',
  'from-[#adefd1] via-[#7cd3c2] to-[#40a5a0]',
  'from-[#f4c95d] via-[#ffe9a5] to-[#9be8df]',
]

export const InformativeSection = ({ id, eyebrow, title, description, items }: InformativeSectionProps): JSX.Element => {
  return (
    <AnimatedSection
      id={id}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(15,155,140,0.08),_transparent_55%)] py-24 dark:bg-[radial-gradient(circle_at_top,_rgba(42,209,163,0.12),_transparent_60%)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 max-w-5xl rounded-full bg-gradient-to-b from-white/70 to-transparent blur-3xl dark:from-[color:var(--color-primary)]/10" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)] dark:text-[color:var(--color-accent)]">{eyebrow}</span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-200">{description}</p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-[30px] bg-white/90 p-8 shadow-lg ring-1 ring-white/60 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900/70 dark:ring-slate-800"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition group-hover:opacity-40 bg-gradient-to-br ${
                  gradients[index % gradients.length]
                }`}
              />
              <div className="relative flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md ${
                    gradients[index % gradients.length]
                  }`}
                >
                  <span className="text-lg font-semibold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
