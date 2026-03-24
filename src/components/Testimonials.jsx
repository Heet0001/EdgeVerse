import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { Card } from '../ui/Card'
import { testimonials } from '../data/content'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-neutral-50">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by Industry Leaders"
          subtitle="See what our partners and customers say about Edgeverse."
          className="mb-16"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={t.id} className="relative">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-neutral-300" />
              <p className="text-neutral-700 leading-relaxed mb-6 pr-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-display font-semibold text-neutral-900">{t.author}</p>
                <p className="text-neutral-500 text-sm">{t.role}, {t.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
