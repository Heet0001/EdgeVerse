import { Shield, Cpu, Camera, Bike } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { Card } from '../ui/Card'
import { features } from '../data/content'

const iconMap = {
  Shield,
  Cpu,
  Camera,
  Bike,
}

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionTitle
          eyebrow="Core Features"
          title="Built for Two-Wheeler Safety"
          subtitle="Technical capabilities powering Perceiva™ ARAS for OEM deployment."
          className="mb-16"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Shield
            return (
              <Card key={feature.id} className="flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-neutral-900" />
                </div>
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
