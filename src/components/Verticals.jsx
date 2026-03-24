import { motion } from 'framer-motion'
import { Car, Truck, Building2 } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { Card } from '../ui/Card'
import { verticals } from '../data/content'

const iconMap = {
  'Automotive OEMs': Car,
  'Fleet Safety': Truck,
  'Smart Mobility Infrastructure': Building2,
}

export function Verticals() {
  return (
    <section id="verticals" className="section-padding bg-white">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Verticals"
          title="Industry Verticals"
          subtitle="EdgeVerse platform capabilities across mobility and automotive applications."
          className="mb-16"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((v, i) => {
            const Icon = iconMap[v.title] || Car
            return (
              <Card key={v.id}>
                <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-neutral-900" />
                </div>
                <h3 className="font-display font-semibold text-neutral-900 mb-2">{v.title}</h3>
                <p className="text-neutral-600 text-sm">{v.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
