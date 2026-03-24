import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { productContent } from '../data/content'

export function ProductSection() {
  return (
    <section id="product" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionTitle
          eyebrow="Product"
          title={productContent.title}
          subtitle={productContent.description}
          className="mb-12"
        />
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-neutral-600 leading-relaxed mb-6 font-medium">
              {productContent.integrationTitle}
            </p>
            <ul className="space-y-3 mb-8">
              {productContent.integrations.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-neutral-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                >
                  <span className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <p className="text-neutral-600 leading-relaxed">
              {productContent.closingStatement}
            </p>
          </div>
          {/* Visual: Sensors → AI Perception → Collision Prediction → Rider Alerts */}
          <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-8">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6 text-center">
              System Flow
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3">
              {productContent.flow.map((step, i) => (
                <motion.div
                  key={step}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <span className="px-4 py-2 rounded-lg bg-white border border-neutral-200 font-medium text-neutral-900 shadow-sm">
                    {step}
                  </span>
                  {i < productContent.flow.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-neutral-400 flex-shrink-0 hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
