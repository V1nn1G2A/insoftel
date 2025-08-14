import { useEffect, useState } from 'react'

import { useLenis } from '@/providers'

export function useLenisInView(
  ref: React.RefObject<HTMLElement | null>,
  headerHeight = 0
) {
  const lenis = useLenis()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const check = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const topVisible =
        rect.top >= headerHeight && rect.top <= window.innerHeight
      const bottomVisible =
        rect.bottom >= headerHeight && rect.bottom <= window.innerHeight
      setInView(topVisible || bottomVisible)
    }

    lenis?.on('scroll', check)
    check()

    return () => {
      lenis?.off('scroll', check)
    }
  }, [ref, headerHeight, lenis])

  return inView
}
