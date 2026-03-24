import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { Button } from '../ui/Button'
import { contactInfo, contactContent } from '../data/content'

export function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionTitle
          eyebrow="Contact"
          title={contactContent.title}
          subtitle={contactContent.description}
          className="mb-16"
        />
        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="font-display font-semibold text-neutral-900 mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-neutral-600">
                <Mail className="w-5 h-5 text-neutral-900 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-neutral-900 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-600">
                <Phone className="w-5 h-5 text-neutral-900 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-neutral-900 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-600">
                <MapPin className="w-5 h-5 text-neutral-900 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-600 mb-2">Name</label>
              <input
                id="name"
                type="text"
                value={formState.name}
                onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-600 mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                placeholder="you@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-neutral-600 mb-2">Company</label>
              <input
                id="company"
                type="text"
                value={formState.company}
                onChange={(e) => setFormState(s => ({ ...s, company: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                placeholder="Your company"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-600 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 resize-none"
                placeholder="Tell us about your integration needs..."
              />
            </div>
            <Button type="submit">
              <Send size={18} />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
