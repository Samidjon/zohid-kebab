'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = { children: ReactNode; className?: string; delay?: number }

export default function Reveal({ children, className = '', delay = 0 }: Props) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={`reveal ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.13, margin: '0px 0px -35px 0px' }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.75, delay: delay / 1000, ease: [0.2, 0.8, 0.2, 1] as const }}
    >
      {children}
    </motion.div>
  )
}
