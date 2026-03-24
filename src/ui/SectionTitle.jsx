import { motion } from 'framer-motion'

export function SectionTitle({ eyebrow, title, subtitle, className = '' }) {
  return (
    <motion.div
      className={`text-center max-w-3xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <span className="inline-block text-neutral-600 font-medium text-sm uppercase tracking-wider mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
