'use client'

import type Lenis from '@studio-freight/lenis'
import { RefObject } from 'react'

export const smoothAutoScroll = (
  requestId: RefObject<number | null>,
  lenis: Lenis
) => {
  if (!lenis) return

  const STEP = 5

  const stopFunction = () => {
    if (requestId.current) {
      cancelAnimationFrame(requestId.current)
      requestId.current = null
    }
  }

  const scrollStep = () => {
    lenis.resize()
    if (lenis.scroll >= lenis.limit) {
      stopFunction()
      return
    }

    lenis.scrollTo(lenis.scroll + STEP, { lerp: 1 })

    requestId.current = requestAnimationFrame(scrollStep)
  }

  scrollStep()

  window.addEventListener('click', stopFunction)
}
