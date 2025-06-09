'use client'

import cn from 'classnames'
import { useInView } from 'motion/react'
import { type FC, useEffect, useRef } from 'react'

import styles from './index.module.scss'

interface ISectionTitle {
  className?: string
  children: string
  index: string
  appereance?: 'light' | 'dark'
}

const cx = cn.bind(styles)

const SectionTitle: FC<ISectionTitle> = ({
  className,
  children,
  index,
  appereance = 'dark',
}) => {
  const classNames = cx(
    styles.header,
    styles[`header--${appereance}`],
    className
  )
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
      className={classNames}
      ref={divRef}
    >
      <sup className={styles.index}>[ {index} ]</sup>
      <h2 className={styles.text}>
        {[...children].map((el, index) => (
          <span
            key={index}
            ref={node => setLetterRef(node, index)}
            style={{ '--count': index + 1 } as React.CSSProperties}
          >
            {el}
          </span>
        ))}
      </h2>
    </div>
  )
}

export default SectionTitle
