import { useEffect } from 'react'

import { useLenis } from '@/providers'

interface UseInnerScrollLockOptions {
  ref: React.RefObject<HTMLElement | null>
  isInView: boolean
  isEnabled?: boolean
  scrollDuration?: number
}

export function useInnerScrollLock({
  ref,
  isInView,
  isEnabled = true,
  scrollDuration = 600,
}: UseInnerScrollLockOptions) {
  const lenis = useLenis()

  useEffect(() => {
    if (!isEnabled || !ref.current) return

    const element = ref.current

    const smoothScroll = (
      target: HTMLElement,
      delta: number,
      duration = 300
    ) => {
      const start = target.scrollTop
      const end = start + delta
      const startTime = performance.now()

      const ease = (t: number) => Math.min(1, 1 - Math.pow(2, -8 * t))

      const animate = (time: number) => {
        const elapsed = time - startTime
        const progress = Math.min(1, elapsed / duration)
        target.scrollTop = start + (end - start) * ease(progress)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }

    const handleLenisScroll = (e: { deltaY: number }) => {
      const { scrollTop, scrollHeight, clientHeight } = element
      const atBottom = Math.abs(scrollTop + clientHeight - scrollHeight) <= 1
      const atTop = scrollTop <= 0

      console.log(scrollTop + clientHeight, scrollHeight)

      if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
        smoothScroll(element, e.deltaY, scrollDuration)
      } else {
        lenis.start()
      }
    }

    const handleWheel = (ev: WheelEvent) => {
      ev.preventDefault()
      handleLenisScroll({ deltaY: ev.deltaY })
    }

    if (isInView) {
      lenis.stop()
      window.addEventListener('wheel', handleWheel, { passive: false })
    } else {
      lenis.start()
      window.removeEventListener('wheel', handleWheel)
    }

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnabled, isInView, scrollDuration])
}
