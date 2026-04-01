'use client'
import { motion } from 'framer-motion'

const ScrollDown = () => {
  return (
    <motion.div
      className='absolute right-0 bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-3 py-2'
      animate={{ y: [0, 6, 0], opacity: [0.85, 1, 0.85] }}
      transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
    >
      <div className='text-ink border-stroke flex h-9 w-5 items-start justify-center rounded-full border bg-transparent py-1'>
        <span className='bg-muted block h-2.5 w-1 rounded-full' />
      </div>
      <p className="text-muted text-sm tracking-wide">Scroll Down</p>
    </motion.div>
  )
}

export default ScrollDown
