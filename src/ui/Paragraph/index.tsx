'use client'

import classNames from 'classnames/bind'
import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

import { AnimationBlock } from '@/ui'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IParagraph {
  title: string
  lines: string[]
  className?: string[]
}

const Paragraph: React.FC<IParagraph> = ({ title, lines, className }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<Record<number, HTMLSpanElement>>({})
  const isInView = useInView(divRef)

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
      className={cx('paragraph', className)}
      ref={divRef}
    >
      <h3 className={cx('title')}>
        {[...title].map((el, index) => (
          <span
            key={index}
            ref={(node: HTMLSpanElement) => {
              setLetterRef(node, index)
            }}
            style={{ '--count': index + 1 } as React.CSSProperties}
          >
            {el}
          </span>
        ))}
      </h3>
      <div>
        {lines.map(line => (
          <AnimationBlock
            type="span"
            key={line}
            className={cx('text')}
          >
            {line}
          </AnimationBlock>
        ))}
      </div>
    </div>
  )
}

export default Paragraph
