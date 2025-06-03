import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'

type RefsMap = Record<string, HTMLSpanElement | null>

interface UseTypedTextProps {
  isTablet: boolean
  typingPlace: React.MutableRefObject<RefsMap>
  strings: string[]
}

const useTypedText = ({
  isTablet,
  typingPlace,
  strings,
}: UseTypedTextProps) => {
  const typedRef = useRef<Typed | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  console.log(isTablet)

  useEffect(() => {
    if (!strings.length) return

    const string = strings[activeIndex]
    const firstLetter = string[0]?.toLowerCase()
    const targetEl = isTablet
      ? typingPlace.current.center
      : typingPlace.current[firstLetter]

    if (!targetEl) return

    if (typedRef.current) {
      typedRef.current.destroy()
    }

    const typeString = isTablet ? string : string.slice(1, string.length - 1)

    typedRef.current = new Typed(targetEl, {
      strings: [typeString],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      showCursor: true,
      loop: false,
      cursorChar: '|',
      autoInsertCss: true,
      onComplete: () => {
        setTimeout(() => {
          setActiveIndex(prev => (prev + 1) % strings.length)
        }, 1000)
      },
    })

    return () => {
      typedRef.current?.destroy()
    }
  }, [activeIndex, isTablet, strings, typingPlace])

  return strings[activeIndex][0]?.toUpperCase()
}

export default useTypedText
