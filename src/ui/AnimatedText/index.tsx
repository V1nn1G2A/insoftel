'use client'

import cn from 'classnames'
import { useInView } from 'motion/react'
import type { FC } from 'react'
import { useEffect, useRef } from 'react'

import styles from './index.module.scss'

interface Iindex {
  children: string
  className?: string
  delaySpeed?: number
  height?: number
  isAnimated?: boolean
}

const cx = cn.bind(styles)

const AnimatedText: FC<Iindex> = ({
  children,
  className,
  delaySpeed = 50,
  height = 56,
  isAnimated = true,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<Record<number, HTMLSpanElement>>({})
  const isInView = useInView(triggerRef)

  const setLetterRef = (node: HTMLSpanElement | null, index: number) => {
    if (!node) return
    lettersRef.current[index] = node
  }

  useEffect(() => {
    Object.values(lettersRef.current).forEach(el => {
      if (isInView) el.classList.add(styles.animate)
      else el.classList.remove(styles.animate)
    })
  }, [isInView])

  if (!isAnimated) return <span className={className}>{children}</span>

  return (
    <span
      className={cx(className, 'text')}
      ref={triggerRef}
    >
      {[...children].map((el, index) => (
        <span
          key={index}
          ref={node => setLetterRef(node, index)}
          style={
            {
              '--count': index + 1,
              '--speed': `${delaySpeed}ms`,
              '--height': `${height}px`,
            } as React.CSSProperties
          }
        >
          {el}
        </span>
      ))}
    </span>
  )
}

export default AnimatedText
