'use client'

import { useEffect, useRef } from 'react'

export const useScrollLock = (isLocked: boolean) => {
  const scrollYRef = useRef(0)

  useEffect(() => {
    const className = 'body-lock'

    if (isLocked) {
      scrollYRef.current = window.scrollY
      document.body.style.width = '100%'
      document.body.style.zIndex = '98'
      document.body.classList.add(className)
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.zIndex = ''
      document.body.classList.remove(className)
      if (scrollYRef.current > 0) {
        window.scrollTo(0, scrollYRef.current)
      }
    }

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.zIndex = ''
      document.body.classList.remove(className)
    }
  }, [isLocked])
}
