import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { navItems } from '../data/content'

import logoImg from '../../Images/edgeverse_ultra_hd-removebg-preview.png'

// ─── Desktop Dropdown Item ───
function DropdownItem({ item, onClick }) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className="dropdown-item group flex flex-col gap-0.5 px-3 py-2.5 rounded-lg transition-colors duration-200 hover:bg-white/[0.04]"
    >
      <span className="text-[15px] font-medium text-neutral-200 group-hover:text-white transition-colors">
        {item.label}
      </span>
      <span className="text-[13.5px] text-neutral-500 group-hover:text-neutral-400 transition-colors leading-snug">
        {item.description}
      </span>
    </a>
  )
}

// ─── Desktop Dropdown Panel ───
function DropdownPanel({ items, onClose }) {
  return (
    <motion.div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
      initial={{ opacity: 0, y: -6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -4, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-black/95 backdrop-blur-2xl border border-white/[0.07] rounded-xl shadow-dropdown min-w-[260px] p-1.5">
        <div className="flex flex-col gap-0.5">
          {items.map((item) => (
            <DropdownItem key={item.label} item={item} onClick={onClose} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Desktop Nav Link (with optional dropdown) ───
function NavLink({ item, isLightMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef(null)
  const hasChildren = item.children && item.children.length > 0

  const open = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  if (!hasChildren) {
    return (
      <a
        href={item.href || '#'}
        className={`nav-link text-[15.5px] font-medium tracking-wide transition-colors duration-200 py-2 ${
          isLightMode
            ? 'text-neutral-600 hover:text-black'
            : 'text-neutral-400 hover:text-white'
        }`}
      >
        {item.label}
      </a>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <button
        className={`nav-link flex items-center gap-1 text-[15.5px] font-medium tracking-wide transition-colors duration-200 py-2 ${
          isLightMode
            ? (isOpen ? 'text-black' : 'text-neutral-600 hover:text-black')
            : (isOpen ? 'text-white' : 'text-neutral-400 hover:text-white')
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-300 ease-premium ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <DropdownPanel
            items={item.children}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Mobile Accordion Item ───
function MobileAccordion({ item, onLinkClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  if (!hasChildren) {
    return (
      <a
        href={item.href || '#'}
        onClick={onLinkClick}
        className="flex items-center justify-between py-3 text-[17px] font-medium text-neutral-300 hover:text-white transition-colors border-b border-white/[0.06]"
      >
        {item.label}
        <ArrowRight size={14} className="text-neutral-600" />
      </a>
    )
  }

  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 text-[17px] font-medium text-neutral-300 hover:text-white transition-colors"
      >
        {item.label}
        <ChevronDown
          size={15}
          className={`text-neutral-500 transition-transform duration-300 ease-premium ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-3 pb-2 flex flex-col gap-1">
              {item.children.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  onClick={onLinkClick}
                  className="dropdown-item group flex flex-col gap-0.5 px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-[15px] text-neutral-300 group-hover:text-white transition-colors">
                    {child.label}
                  </span>
                  <span className="text-[13px] text-neutral-600 group-hover:text-neutral-400 transition-colors">
                    {child.description}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Main Navbar ───
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const isLightMode = isScrolled && !isMobileOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const closeMobile = () => setIsMobileOpen(false)

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        isLightMode
          ? 'bg-white/95 backdrop-blur-2xl border-b border-neutral-200 shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        <div
          className={`grid grid-cols-[auto_1fr_auto] items-center gap-8 transition-all duration-500 ease-premium ${
            isScrolled ? 'h-16' : 'h-[72px]'
          }`}
        >
          {/* ─ Logo ─ */}
          <a
            href="#"
            className="flex items-center shrink-0"
            aria-label="EdgeVerse Home"
          >
            <img
              src={logoImg}
              alt="EdgeVerse"
              className={`w-auto object-contain object-left transition-all duration-500 brightness-0 ${
                isLightMode ? 'h-14 sm:h-16' : 'h-16 sm:h-20 invert'
              }`}
            />
          </a>

          {/* ─ Desktop Nav Links (centered) ─ */}
          <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} isLightMode={isLightMode} />
            ))}
          </div>

          {/* ─ Right: CTA + Hamburger ─ */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <a
              href="#contact"
              className={`hidden lg:inline-flex items-center justify-center px-5 py-2 rounded-lg text-[15px] font-semibold tracking-wide transition-all duration-300 border ${
                isLightMode
                  ? 'text-white bg-black hover:bg-neutral-800 border-black'
                  : 'text-black bg-white hover:bg-neutral-200 border-white/20'
              }`}
            >
              Contact Us
            </a>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden relative p-2 transition-colors ${
                isLightMode ? 'text-neutral-600 hover:text-black' : 'text-neutral-400 hover:text-white'
              }`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[64px] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeMobile} />

            {/* Panel */}
            <motion.div
              className="relative h-full bg-black backdrop-blur-2xl border-t border-white/[0.06] overflow-y-auto no-scrollbar"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="max-w-lg mx-auto px-6 py-6">
                {/* Nav items */}
                <motion.div
                  className="flex flex-col"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={{
                        hidden: { opacity: 0, x: -16 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <MobileAccordion item={item} onLinkClick={closeMobile} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.35 }}
                >
                  <a
                    href="#contact"
                    onClick={closeMobile}
                    className="flex items-center justify-center w-full px-6 py-3.5 rounded-xl text-[16px] font-semibold text-black bg-white hover:bg-neutral-200 transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
