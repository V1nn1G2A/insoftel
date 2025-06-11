'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from './loading.module.scss'

const LoadingMessages = [
  '[ Develop your software ]',
  '[ Develop your soft ]',
  '[ Integrate your hardware ]',
  '[ Automate your process ]',
  '[ Innovate your future ]',
]

const Loading = () => {
  const [message, setMessage] = useState(LoadingMessages[0])
  const [dots, setDots] = useState('')
  const [percent, setPercent] = useState(0)
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    setPercent(0)

    const messageInterval = setInterval(() => {
      setMessage(prev => {
        const currentIndex = LoadingMessages.indexOf(prev)
        const nextIndex = (currentIndex + 1) % LoadingMessages.length
        return LoadingMessages[nextIndex]
      })
    }, 2000)

    const percentInterval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(percentInterval)
          clearInterval(messageInterval)
          setTimeout(() => setLoading(false), 100)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => {
      clearInterval(percentInterval)
      clearInterval(messageInterval)
    }
  }, [pathname])

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''))
    }, 300)

    return () => clearInterval(dotInterval)
  }, [])

  if (!loading) return null

  return (
    <div className={styles.loading}>
        <div className={styles.loading__wrapper}>
        <span className={styles.loading__percent}>[{percent}%]</span>
            <span className={styles.loading__text}>loading{dots}</span> 
            <div className={styles.loading__message}>{message}</div>
        </div>
    </div>
  )
}

export default Loading