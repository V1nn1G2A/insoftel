import { useEffect, useRef, useState } from 'react'

export function useAnimatedWords(words: string[]) {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [shouldDisappear, setShouldDisappear] = useState(false)
  const [shouldShowT, setShouldShowT] = useState(false)
  const [hideWord, setHideWord] = useState(false)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const activeWord = words[activeIndex]

  const setNextIndex = () => {
    setActiveIndex(prev => {
      if (prev === words.length - 1) return 0
      else return ++prev
    })
  }

  useEffect(() => {
    const addInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(
        setNextIndex,
        (activeWord.length + 1) * 500
      )
    }

    let delayTimer: NodeJS.Timeout

    if (activeIndex === -1) {
      delayTimer = setTimeout(() => setActiveIndex(0), 2000)
    } else {
      addInterval()
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      clearTimeout(delayTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeWord])

  // Логика для shouldShowT и shouldDisappear
  useEffect(() => {
    if (activeWord === 'telecommunication' || activeWord === 'technologies') {
      setShouldShowT(true)
      const appearDuration = (activeWord.length * 0.5) / 2

      const timer = setTimeout(() => {
        setShouldDisappear(true)
        setTimeout(() => {
          setHideWord(true)
          setShouldDisappear(false)
          setShouldShowT(true)
        }, appearDuration * 1000)
      }, appearDuration * 1000)

      return () => {
        clearTimeout(timer)
        setShouldDisappear(false)
        setShouldShowT(false)
        setHideWord(false)
      }
    } else {
      setShouldDisappear(false)
      setShouldShowT(false)
      setHideWord(false)
    }
  }, [activeWord])

  return {
    activeIndex,
    setActiveIndex,
    activeWord,
    shouldDisappear,
    shouldShowT,
    setNextIndex,
    hideWord,
  }
}
