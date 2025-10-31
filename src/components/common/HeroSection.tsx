import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import { useNotificationStore } from '../../store/notificationStore'
import { Button } from '../ui/button'
import { AnimatedSection } from './AnimatedSection'
import { GradientOrbs } from './GradientOrbs'

const heroHighlights = [
  'Alertas de brecha en tiempo real',
  'Integración con microservicios institucionales',
  'Ecosistema colaborativo con empresas aliadas',
]

const heroMetrics = [
  { label: 'Instituciones conectadas', value: '38+' },
  { label: 'Empresas aliadas', value: '120+' },
  { label: 'Evaluaciones al año', value: '4.500+' },
]

const heroPanelItems = [
  { title: 'Brecha promedio', value: '12%', trend: '+3.2%' },
  { title: 'Competencias destacadas', value: 'Trabajo en equipo · Comunicación' },
  { title: 'Índice de contratación', value: '68%' },
]

const HeroBadge = () => (
  <motion.span
    className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] shadow-sm ring-1 ring-[color:var(--color-secondary)]/40 backdrop-blur"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <ShieldCheck className="h-4 w-4" />
    Analítica estratégica educativa
  </motion.span>
)

const HeroMetricCard = ({ label, value }: { label: string; value: string }) => (
  <motion.div
    className="rounded-2xl bg-white/90 p-4 text-center shadow-md ring-1 ring-white/70 backdrop-blur dark:bg-slate-900/70 dark:ring-slate-800"
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
  >
    <div className="text-xl font-semibold text-[color:var(--color-primary)] dark:text-[color:var(--color-accent)]">{value}</div>
    <p className="text-xs text-slate-500 dark:text-slate-300">{label}</p>
  </motion.div>
)

const HeroHighlight = ({ highlight }: { highlight: string }) => (
  <motion.li
    key={highlight}
    className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-slate-500 shadow-sm ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-800"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)] dark:bg-[color:var(--color-accent)]" />
    {highlight}
  </motion.li>
)

const HeroPanel = () => (
  <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/95 p-6 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/80">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-300">Panel RADAR Insight</p>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">Trimestre actual</p>
      </div>
      <span className="rounded-full bg-[color:var(--color-primary-light)]/70 px-3 py-1 text-xs font-semibold text-[color:var(--color-primary-dark)] dark:bg-emerald-500/20 dark:text-[color:var(--color-accent)]">
        Live
      </span>
    </div>
    <div className="mt-6 grid gap-4">
      {heroPanelItems.map((item) => (
        <motion.div
          key={item.title}
          className="rounded-2xl bg-[color:var(--color-neutral)]/80 p-4 shadow-inner dark:bg-slate-800/60"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-[11px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-300">{item.title}</div>
          <div className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{item.value}</div>
          {item.trend && (
            <div className="text-xs text-[color:var(--color-accent)]">{item.trend} respecto al año anterior</div>
          )}
        </motion.div>
      ))}
    </div>
    <motion.div
      className="mt-6 grid gap-4 rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] p-5 text-white shadow-xl"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.div>
    <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/80 p-4 text-xs text-slate-500 dark:bg-slate-800/70 dark:text-slate-200">
      <div>
        <p className="font-semibold text-[color:var(--color-primary-dark)] dark:text-[color:var(--color-accent)]">Integración activa</p>
        <p>API · CRM · LMS</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[color:var(--color-primary)] dark:bg-[color:var(--color-accent)]" />
        Sincronizado hace 5 min
      </div>
    </div>
  </div>
)

const HeroActions = () => {
  const push = useNotificationStore((state) => state.push)

  const handleNotify = () => {
    push({
      title: 'Experiencia de demo lista',
      description: 'Solicita acceso y explora tableros inmersivos para tu institución.',
      tone: 'info',
    })
  }

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <Button asChild size="lg" className="w-full sm:w-auto">
        <Link to="/login" className="group">
          <span className="flex items-center gap-2">
            Explorar tableros
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </Button>
      <Button
        variant="secondary"
        size="lg"
        onClick={handleNotify}
        className="w-full border border-emerald-200/70 bg-white/80 text-[color:var(--color-primary)] shadow-sm hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] dark:border-emerald-500/40 dark:bg-slate-900/50 dark:text-[color:var(--color-accent)] sm:w-auto"
      >
        <PlayCircle className="h-4 w-4" />
        Ver analítica
      </Button>
    </div>
  )
}

export const HeroSection = (): JSX.Element => {
  return (
    <AnimatedSection className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(81,196,183,0.25),_transparent_55%),_linear-gradient(180deg,_#f5fbf9_0%,_#ffffff_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(42,209,163,0.15),_transparent_60%),_linear-gradient(180deg,_#071311_0%,_#04110f_70%)]">
      <GradientOrbs />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div className="relative space-y-8">
          <HeroBadge />
          <div className="space-y-4">
            <motion.h1
              className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              RADAR alinea la promesa académica con el impacto real en el mercado laboral.
            </motion.h1>
            <motion.p
              className="max-w-xl text-lg text-slate-600 dark:text-slate-200"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Visualiza brechas, activa planes de mejora y coordina a tus aliados empresariales con una experiencia inspirada en las plataformas más intuitivas.
            </motion.p>
          </div>
          <HeroActions />
          <motion.ul
            className="flex flex-wrap gap-3 text-sm"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.6,
                },
              },
            }}
          >
            {heroHighlights.map((highlight) => (
              <HeroHighlight key={highlight} highlight={highlight} />
            ))}
          </motion.ul>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((stat) => (
              <HeroMetricCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
        <div className="relative mx-auto max-w-lg sm:max-w-xl lg:mx-0">
          <div className="absolute inset-0 hidden -translate-y-6 scale-105 rounded-[44px] bg-gradient-to-br from-white/70 via-[color:var(--color-secondary)]/20 to-transparent blur-3xl dark:from-emerald-500/10 dark:via-emerald-400/5 dark:to-transparent sm:block" />
          <HeroPanel />
        </div>
      </div>
    </AnimatedSection>
  )
}
