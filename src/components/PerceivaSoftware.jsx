import { motion } from 'framer-motion'
import { Layers } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { edgeVerseStack } from '../data/content'

export function PerceivaSoftware() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-narrow">
        <SectionTitle
          eyebrow="Stack"
          title="Software Stack"
          subtitle="Modular layers for perception, prediction, and OEM integration."
          className="mb-16"
        />
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {edgeVerseStack.map((layer, i) => (
            <motion.div
              key={layer.name}
              className="p-6 rounded-xl bg-white border border-neutral-200 shadow-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-neutral-900 flex-shrink-0" />
                <span className="font-display font-semibold text-neutral-900">{layer.name}</span>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">{layer.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
