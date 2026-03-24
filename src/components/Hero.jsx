import { motion } from 'framer-motion'
import { Camera, Radio, Cpu, AlertTriangle, ArrowRight } from 'lucide-react'
import { heroContent } from '../data/content'
import { Button } from '../ui/Button'
import heroVideo from '../assets/hero_video.mp4'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative container-narrow text-center section-padding pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-white/10 text-neutral-300 text-xs font-medium border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {heroContent.badge}
          </motion.span>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            {heroContent.headline}
          </h1>

          <p className="text-neutral-400 text-base md:text-lg max-w-3xl mx-auto font-medium">
            {heroContent.subheadline}
          </p>

          <p className="text-neutral-500 text-sm md:text-base max-w-2xl mx-auto">
            {heroContent.description}
          </p>

          {/* Metrics Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {heroContent.metrics.map((metric, i) => (
              <div
                key={i}
                className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-left md:text-center"
              >
                <span className="block font-display font-bold text-white text-base md:text-lg">
                  {metric.value}
                </span>
                <span className="text-neutral-400 text-xs">{metric.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button href="#contact" className="w-full sm:w-auto !bg-white !text-neutral-900 hover:!bg-neutral-100">
              {heroContent.ctaPrimary}
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" href="#architecture" className="w-full sm:w-auto !border-white !text-white hover:!bg-white/10">
              {heroContent.ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Visual: Motorcycle → Camera + Radar → AI detection → Collision alert */}
        <motion.div
          className="mt-16 md:mt-24 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-neutral-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-xl">🏍️</span>
            <span className="text-xs font-medium text-neutral-400">Motorcycle</span>
          </div>
          <span className="text-neutral-600">→</span>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
            <Camera className="w-5 h-5 text-blue-400" />
            <Radio className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-medium text-neutral-400">Camera + Radar</span>
          </div>
          <span className="text-neutral-600">→</span>
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-medium text-neutral-400">AI Detection</span>
          </div>
          <span className="text-neutral-600">→</span>
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-medium text-neutral-400">Collision Alert</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="#product" className="block p-2 rounded-full border border-white/30 hover:border-white/60 text-white/70 hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
