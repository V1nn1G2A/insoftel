'use client'

import { AnimationBlock } from '..'
import { useInView } from 'motion/react'
import type { FC, ReactNode } from 'react'
import { useEffect, useRef } from 'react'

import AnimatedLine from '../AnimatedLine'

import styles from './index.module.scss'

interface IStatsNumber {
  className?: string
  title: string
  children: ReactNode
}

const StatsNumber: FC<IStatsNumber> = ({ className, title, children }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<Record<number, HTMLSpanElement>>({})
  const isInView = useInView(divRef, { once: true })

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

  return (
    <div
      className={`${styles.stats} ${className}`}
      ref={divRef}
    >
      <div className={styles.stats__main}>
        <div className={styles.text}>
          {[...title].map((el, index) => (
            <span
              key={index}
              ref={node => setLetterRef(node, index)}
              style={{ '--count': index + 1 } as React.CSSProperties}
            >
              {el}
            </span>
          ))}
        </div>
        <AnimationBlock
          type="p"
          className={styles.children}
        >
          {children}
        </AnimationBlock>
      </div>
      <AnimatedLine
        targetRef={divRef}
        className={styles.line}
      />
    </div>
  )
}

export default StatsNumber
