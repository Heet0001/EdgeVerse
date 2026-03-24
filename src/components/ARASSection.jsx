import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { arasStats, arasContent } from '../data/content'

export function ARASSection() {
  return (
    <section id="aras" className="section-padding bg-neutral-50">
      <div className="container-narrow">
        <SectionTitle
          eyebrow="ARAS"
          title={arasContent.title}
          subtitle={arasContent.description}
          className="mb-20"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {arasStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 rounded-xl bg-white border border-neutral-200 shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                {stat.label === 'Alert Latency' ? (
                  <span>
                    &lt;<AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-neutral-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
