import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { imedgeSpecs } from '../data/content'

export function ImedgeSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-narrow">
        <SectionTitle
          eyebrow="Imedge"
          title="Intelligent Edge Inference"
          subtitle="Deploy perception models at the edge with minimal latency and maximum reliability."
          className="mb-16"
        />
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {imedgeSpecs.map((spec, i) => (
            <div
              key={spec.label}
              className="p-6 rounded-xl bg-white border border-neutral-200 shadow-card"
            >
              <p className="text-neutral-500 text-sm mb-1">{spec.label}</p>
              <p className="font-display font-semibold text-neutral-900">{spec.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
