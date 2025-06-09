'use client'

import { useRef } from 'react'

import { AnimatedLine, AnimatedText, AnimationBlock, BigLetter } from '@/ui'

import styles from './index.module.scss'

const Heading = () => {
  const ref = useRef(null)

  return (
    <div
      className={styles.heading__wrapper}
      ref={ref}
    >
      <div className={styles.heading}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <AnimatedText
              height={100}
              className={styles.line}
            >
              We’d Love to
            </AnimatedText>
            <AnimatedText
              height={100}
              className={styles.line}
            >
              Hear from You!
            </AnimatedText>
          </h1>
          <AnimationBlock
            type="p"
            className={styles.text}
          >
            Whether you have a question about our services, are interested in a
            partnership, or want to learn more about our company, feel free to
            reach out.
          </AnimationBlock>
        </div>
        <div className={styles.letters}>
          <BigLetter className={styles.s}>S</BigLetter>
          <BigLetter className={styles.t}>T</BigLetter>
        </div>
      </div>
      <AnimatedLine
        targetRef={ref}
        className={styles.border}
        x={-1400}
      />
    </div>
  )
}

export default Heading
