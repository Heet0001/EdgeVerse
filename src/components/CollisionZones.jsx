import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { collisionZones } from '../data/content'

const zoneColors = {
  primary: 'border-neutral-900/30 bg-neutral-50',
  accent: 'border-neutral-700/30 bg-neutral-50',
  emerald: 'border-neutral-600/30 bg-neutral-50',
  violet: 'border-neutral-500/30 bg-neutral-50',
}

export function CollisionZones() {
  return (
    <section id="collision-awareness" className="section-padding bg-neutral-50">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Safety Zones"
          title="360° Collision Awareness"
          subtitle="Comprehensive monitoring across all collision risk zones for rider safety."
          className="mb-16"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {collisionZones.map((zone, i) => (
            <motion.div
              key={zone.id}
              className={`rounded-xl border-2 p-6 bg-white ${zoneColors[zone.color] || zoneColors.primary}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="w-3 h-3 rounded-full bg-neutral-900 opacity-80 mb-3" />
              <h3 className="font-display font-semibold text-neutral-900">{zone.label}</h3>
              <p className="text-neutral-500 text-sm mt-1">{zone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
