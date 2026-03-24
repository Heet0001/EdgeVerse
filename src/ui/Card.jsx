import { motion } from 'framer-motion'

export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`rounded-xl bg-white backdrop-blur border border-neutral-200 p-6 transition-all duration-300 shadow-card ${hover ? 'hover:border-neutral-400 hover:shadow-card-hover' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4 }}
      whileHover={hover ? { y: -4 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}
