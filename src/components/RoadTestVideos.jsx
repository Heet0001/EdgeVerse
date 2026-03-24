import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { Card } from '../ui/Card'
import { roadTestVideos } from '../data/content'

export function RoadTestVideos() {
  return (
    <section id="validation" className="section-padding bg-white">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Validation"
          title="Real-World Validation"
          subtitle="Perceiva is tested across diverse riding environments including dense urban traffic, highways, and low-light conditions."
          className="mb-16"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadTestVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <Card className="p-0 overflow-hidden group cursor-pointer">
                <div className="relative aspect-video bg-neutral-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-7 h-7 ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/60 text-xs text-white">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {video.title}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
