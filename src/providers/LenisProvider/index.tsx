'use client'

import Lenis from 'lenis'
import { createContext } from 'react'
import { ReactNode, useEffect, useRef, useState } from 'react'

import { useMediaQuery } from '@/hooks'

export const LenisContext = createContext<Lenis | null>(null)

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: isMobile ? 0.6 : 1.2,
      easing: t => Math.min(1, 1 - Math.pow(2, -8 * t)),
      smoothWheel: true,
      syncTouch: true,
      // allowNestedScroll: true,
      // overscroll: true,
      // autoToggle: true, // эта штука заставляет при стопе лениса подниматься на верх страницу резко
    })

    setLenis(lenis)

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [isMobile])

  return (
    <LenisContext.Provider value={lenis}>
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
          {lenis ? children : null}
        </div>
      </div>
    </LenisContext.Provider>
  )
}
