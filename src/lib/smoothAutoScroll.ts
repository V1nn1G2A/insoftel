'use client'

import type Lenis from 'lenis'
import type { RefObject } from 'react'

export const smoothAutoScroll = (
  lenis: Lenis,
  target: RefObject<HTMLElement | null> | number
) => {
  if (!lenis) return

  let scrollToPosition: number

  if (typeof target === 'number') {
    scrollToPosition = target
  } else if (target.current) {
    const el = target.current
    console.log(el.offsetTop, el.offsetHeight)

    const header: HTMLElement | null = document.querySelector('#header')

    scrollToPosition = el.offsetTop + el.offsetHeight - header!.offsetHeight
  } else {
    return
  }

  lenis.scrollTo(scrollToPosition, {
    duration: 3,
    easing: t => 1 - Math.pow(1 - t, 3),
    immediate: false,
  })
}
