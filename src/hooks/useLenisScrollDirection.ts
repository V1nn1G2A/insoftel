import { useEffect, useRef, useState } from 'react'

import { useLenis } from '@/providers'

type ScrollDirection = 'up' | 'down'

export const useLenisScrollDirection = (throttle = 50): ScrollDirection => {
  const lenis = useLenis()

  const [direction, setDirection] = useState<ScrollDirection>('down')
  const lastScroll = useRef(0)
  const lastUpdate = useRef(0)

  useEffect(() => {
    if (!lenis) return

    const onScroll = ({ scroll }: { scroll: number }) => {
      const now = performance.now()
      if (now - lastUpdate.current < throttle) return
      lastUpdate.current = now

      const newDirection: ScrollDirection =
        scroll > lastScroll.current ? 'down' : 'up'

      if (newDirection !== direction) {
        setDirection(newDirection)
      }

      lastScroll.current = scroll
    }

    lenis.on('scroll', onScroll)
    return () => {
      lenis.off('scroll', onScroll)
    }
  }, [lenis, throttle, direction])

  return direction
}
