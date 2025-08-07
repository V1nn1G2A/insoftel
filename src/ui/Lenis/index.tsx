'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'

interface LenisWrapperProps {
  children: ReactNode
}

const LenisWrapper: FC<LenisWrapperProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
      }}
    >
      <div
        ref={contentRef}
        style={{ minHeight: '100%' }}
      >
        {children}
      </div>
    </div>
  )
}

export default LenisWrapper
