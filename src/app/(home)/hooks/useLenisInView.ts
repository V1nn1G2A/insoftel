'use client'

import { useEffect, useState } from 'react'

import { useLenisScrollDirection } from '@/hooks'
import { useHeaderHeight } from '@/hooks/useHeaderHeight'
import { useLenis } from '@/providers'

interface UseLenisInViewOptions {
  ref: React.RefObject<HTMLDivElement | null>
  buffer?: number
}

export function useLenisInView({ ref, buffer = 0 }: UseLenisInViewOptions) {
  const [isInView, setIsInView] = useState(false)
  const headerHeight = useHeaderHeight()
  const lenis = useLenis()
  const direction = useLenisScrollDirection()

  const getDocumentOffsetTop = (el: HTMLElement) => {
    let offset = 0
    let current: HTMLElement | null = el
    while (current) {
      offset += current.offsetTop
      current = current.offsetParent as HTMLElement | null
    }
    return offset
  }

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const checkInView = (scroll: number) => {
      const start = getDocumentOffsetTop(el) - headerHeight
      const end = start + el.offsetHeight

      const lenisBuffer = 25

      if (direction === 'down') {
        setIsInView(scroll + buffer >= start && scroll <= start + lenisBuffer)
      } else if (direction === 'up') {
        console.log(end, scroll)

        setIsInView(scroll + buffer >= start && scroll <= start + lenisBuffer)
      }
    }

    const onScroll = ({ scroll }: { scroll: number }) => {
      checkInView(scroll)
    }

    lenis.on('scroll', onScroll)
    checkInView(lenis.scroll) // проверка сразу

    return () => {
      lenis.off('scroll', onScroll)
    }
  }, [ref, lenis, headerHeight, direction, buffer])

  return isInView
}
