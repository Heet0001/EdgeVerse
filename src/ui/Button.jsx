import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-card',
  secondary: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-50',
  ghost: 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100',
}

export function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
  const classes = `${base} ${variants[variant]} ${className}`

  const Comp = motion[href ? 'a' : 'button']

  return (
    <Comp
      href={href}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Comp>
  )
}
