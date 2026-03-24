import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { architectureContent } from '../data/content'

export function PlatformArchitecture() {
  return (
    <section id="architecture" className="section-padding bg-neutral-50">
      <div className="container-narrow">
        <SectionTitle
          eyebrow="Architecture"
          title={architectureContent.title}
          className="mb-16"
        />
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-0">
            {architectureContent.steps.map((step, i) => (
              <motion.div
                key={step}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-display font-semibold text-sm">
                    {i + 1}
                  </div>
                  {i < architectureContent.steps.length - 1 && (
                    <div className="w-0.5 min-h-8 bg-neutral-300 mt-2" />
                  )}
                </div>
                <div className="flex-1 pt-1 pb-6">
                  <span className="font-medium text-neutral-900">{step}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-neutral-600 leading-relaxed text-center max-w-2xl mx-auto">
            {architectureContent.explanation}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
