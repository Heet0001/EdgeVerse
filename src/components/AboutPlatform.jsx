import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { platformContent } from '../data/content'

export function AboutPlatform() {
  return (
    <section id="platform" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionTitle
          eyebrow="Platform"
          title={platformContent.title}
          subtitle={platformContent.description}
          className="mb-16"
        />
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <ul className="space-y-3">
              {platformContent.capabilities.map((capability, i) => (
                <motion.li
                  key={capability}
                  className="flex items-center gap-3 text-neutral-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <span className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  {capability}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-8">
            <div className="aspect-video rounded-lg bg-neutral-200 flex items-center justify-center">
              <span className="text-neutral-500 text-sm text-center px-4">
                Sensor Fusion Illustration
                <br />
                <span className="text-xs">(Camera + Radar)</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
