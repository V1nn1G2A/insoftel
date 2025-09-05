import { useEffect, useState } from 'react'

const getViewportHeight = (): number => {
  return window.innerHeight || document.documentElement.clientHeight
}

export const useViewportHeight = () => {
  const [height, setHeight] = useState<number>(getViewportHeight)

  useEffect(() => {
    const handleResize = () => {
      setHeight(getViewportHeight())
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return height
}
