import type { ReactNode } from 'react'

import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

type AnimatedSectionProps = {
  className?: string
  children: ReactNode
  as?: keyof typeof motion
  delay?: number
}

export const AnimatedSection = ({ className, children, as = 'section', delay = 0 }: AnimatedSectionProps) => {
  const Component = motion[as]

  return (
    <Component
      className={cn('relative', className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Component>
  )
}
