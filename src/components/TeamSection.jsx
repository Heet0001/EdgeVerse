import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { Card } from '../ui/Card'
import { teamMembers } from '../data/content'

const imageModules = import.meta.glob('../../Images/*.jpg', { eager: true, query: '?url', import: 'default' })
const teamImages = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => {
    const filename = path.split('/').pop()
    return [filename, url]
  })
)

export function TeamSection() {
  return (
    <section id="team" className="section-padding bg-neutral-50">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Leadership"
          title="Our Leadership"
          subtitle="Experts in AI, automotive safety, and mobility systems."
          className="mb-16"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="h-full"
            >
              <Card className="text-center h-full flex flex-col items-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-neutral-200 flex items-center justify-center mb-4 text-neutral-600 font-display text-2xl">
                  {teamImages[member.image] ? (
                    <img
                      src={teamImages[member.image]}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    member.name.split(' ').map(n => n[0]).join('')
                  )}
                </div>
                <h3 className="font-display font-semibold text-neutral-900">{member.name}</h3>
                <p className="text-neutral-500 text-sm font-medium mb-4">{member.role}</p>
                <div className="mt-auto flex justify-center gap-2 w-full">
                  <a
                    href={member.linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-neutral-500 hover:text-[#0A66C2] hover:bg-neutral-100 transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
