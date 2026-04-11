'use client'

import { useEffect, useRef } from 'react'

const EASE = 0.12
const SETTLE = 0.04

export const GradientCanvas = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let targetX = 50
    let targetY = 50
    let currentX = 50
    let currentY = 50
    let rafId = 0

    const paint = () => {
      currentX += (targetX - currentX) * EASE
      currentY += (targetY - currentY) * EASE
      el.style.setProperty('--mouse-x', `${currentX}%`)
      el.style.setProperty('--mouse-y', `${currentY}%`)

      const settled =
        Math.abs(targetX - currentX) < SETTLE &&
        Math.abs(targetY - currentY) < SETTLE

      if (!settled) {
        rafId = requestAnimationFrame(paint)
      } else {
        rafId = 0
      }
    }

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 100
      targetY = (e.clientY / window.innerHeight) * 100
      if (!rafId) {
        rafId = requestAnimationFrame(paint)
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={ref} className="gradient-canvas" aria-hidden />
}
