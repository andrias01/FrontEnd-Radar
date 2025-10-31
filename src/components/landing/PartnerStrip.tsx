import { motion } from 'framer-motion'

const partners = [
  { name: 'Universidad Horizonte', label: 'Educación superior' },
  { name: 'Colegio Andino', label: 'Media técnica' },
  { name: 'Red Empresarial', label: 'Empresas aliadas' },
  { name: 'Tech4Jobs', label: 'Talent tech' },
  { name: 'Fundación Horizonte', label: 'Impacto social' },
  { name: 'SmartSkills', label: 'Formación continua' },
]

export const PartnerStrip = (): JSX.Element => {
  return (
    <section className="bg-white/80 py-10 dark:bg-slate-900/60">
      <div className="relative mx-auto max-w-5xl overflow-hidden px-4">
        <motion.div
          className="flex min-w-full items-center justify-around gap-8 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-300"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="text-center">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-200">{partner.name}</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-400">{partner.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
