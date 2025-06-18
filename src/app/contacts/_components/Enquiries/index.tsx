'use client'

import Link from 'next/link'
import { useRef } from 'react'

import { AnimatedLine, AnimatedText, AnimationBlock } from '@/ui'

import styles from './index.module.scss'

const Enquiries = () => {
  const ref = useRef(null)

  return (
    <div
      className={styles.enquiries__wrapper}
      ref={ref}
      id="General Enquiries"
    >
      <div className={styles.enquiries}>
        <h2 className={styles.title}>
          <AnimatedText
            height={100}
            className={styles.line}
          >
            General
          </AnimatedText>
          <AnimatedText
            height={100}
            className={styles.line}
          >
            Enquiries
          </AnimatedText>
        </h2>
        <AnimationBlock
          type="p"
          className={styles.text}
        >
          For general information or specific questions, please email us at
          <Link href="mailto:info@insofteltechnologies.com">
            <b className={styles.mail}> info@insofteltechnologies.com</b>
          </Link>
          <br />
          We’ll respond promptly to assist with any queries.
        </AnimationBlock>
      </div>
      <AnimatedLine
        targetRef={ref}
        className={styles.border}
        x={-1400}
      />
    </div>
  )
}

export default Enquiries
