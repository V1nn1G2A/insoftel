'use client'

import type Lenis from '@studio-freight/lenis'
import { RefObject } from 'react'

export const smoothAutoScroll = (
  requestId: RefObject<number | null>,
  lenis: Lenis,
  target: number
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
    if (lenis.scroll >= target) {
      stopFunction()
      return
    }

    lenis.scrollTo(lenis.scroll + STEP, { lerp: 1 })

    requestId.current = requestAnimationFrame(scrollStep)
  }

  const setAnimation = () => {
    requestId.current = requestAnimationFrame(scrollStep)
  }

  setAnimation()

  window.addEventListener('click', stopFunction)
}
