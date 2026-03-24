import { Linkedin } from 'lucide-react'
import { siteConfig, contactInfo } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-wide py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              </div>
              <span className="font-display text-3xl font-bold text-sky-400">{siteConfig.name}</span>
            </div>
            <a
              href="https://www.linkedin.com/company/edgeverse-india-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex p-2 rounded-full border border-neutral-600 hover:border-sky-500 hover:text-sky-400 transition-colors mb-6"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <h4 className="font-display font-semibold text-white mb-4">About</h4>
            <p className="text-neutral-400 text-sm leading-relaxed mb-2">
              EdgeVerse — AI perception platform. Perceiva™ — Advanced Rider Assistance System for motorcycles.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-2">
              {contactInfo.address}
            </p>
            <p className="text-neutral-400 text-sm mb-1">
              <strong className="text-neutral-300">Phone:</strong>{' '}
              <a href={`tel:${contactInfo.phone}`} className="hover:text-sky-400 transition-colors">
                {contactInfo.phone}
              </a>
            </p>
            <p className="text-neutral-400 text-sm mb-4">
              <strong className="text-neutral-300">Email:</strong>{' '}
              <a href={`mailto:${contactInfo.email}`} className="hover:text-sky-400 transition-colors">
                {contactInfo.email}
              </a>
            </p>
            <p className="text-neutral-500 text-sm">
              Copyright Edgeverse © 2025 All Right Reserved
            </p>
          </div>

          {/* Get in touch with Map */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Get in touch</h4>
            <div className="rounded-xl overflow-hidden border border-neutral-700 shadow-xl ring-1 ring-neutral-600/50 bg-neutral-800/30">
              <iframe
                title="Edgeverse India Private Limited - Location"
                src="https://maps.google.com/maps?q=Edgeverse+India+Private+Limited,+G01,+520,+8th+Cross+BEML+Layout,+Thubarahalli,+Bengaluru,+Karnataka+560066&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/S7PLeEZozoEubRB4A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-neutral-400 hover:text-sky-400 text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
