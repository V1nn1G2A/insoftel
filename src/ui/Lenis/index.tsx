'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

const LenisWrapper = () => {
  useEffect(() => {
    const wrapper = document.getElementById('lenis-root')
    if (!wrapper) return

    const lenis = new Lenis({
      wrapper: wrapper,
      content: wrapper,
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}

export default LenisWrapper
