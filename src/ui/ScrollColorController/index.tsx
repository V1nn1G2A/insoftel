'use client'

import { useInView } from 'motion/react'
import { useEffect } from 'react'

import { useLenis } from '@/providers'

interface Props {
  sectionRef: React.RefObject<HTMLElement | null>
}

const ScrollColorController = ({ sectionRef }: Props) => {
  const lenis = useLenis()
  const isInView = useInView(sectionRef, { amount: 0.1 })

  useEffect(() => {
    if (!lenis || !sectionRef.current) return

    const element = sectionRef.current

    if (!isInView) {
      document.documentElement.style.setProperty('--header-bg-opacity', '1')
      return
    }

    const handleScroll = () => {
      const scrollY = lenis.scroll
      const sectionTop = element.offsetTop
      const sectionHeight = element.offsetHeight
      const viewportHeight = window.innerHeight

      const distanceFromBottom = scrollY + viewportHeight - sectionTop
      const total = viewportHeight + sectionHeight

      let progress = distanceFromBottom / total

      progress = Math.min(Math.max(progress, 0), 0.95)

      document.documentElement.style.setProperty(
        '--header-bg-opacity',
        progress.toFixed(3)
      )
    }

    lenis.on('scroll', handleScroll)
    handleScroll()

    return () => {
      lenis.off('scroll', handleScroll)
    }
  }, [lenis, sectionRef, isInView])

  return null
}

export default ScrollColorController
