'use client'

import { FC, useRef } from 'react'

import { AnimatedLine, AnimatedText, AnimationBlock } from '@/ui'

import styles from './index.module.scss'

export interface ITechSection {
  title: string
  titleIndex: string
  mainText: string
  secondaryText: string
  isLast?: boolean
}

const TechSection: FC<ITechSection> = ({
  title,
  titleIndex,
  mainText,
  secondaryText,
  isLast,
}) => {
  const ref = useRef(null)
  return (
    <div className={styles.technologiesSection__wrapper}>
      <section
        className={styles.technologiesSection}
        ref={ref}
      >
        <h2 className={styles.technologiesSection__title}>
          <sup className={styles.technologiesSection__titleIndex}>
            [ {titleIndex} ]
          </sup>
          <AnimatedText>{title}</AnimatedText>
        </h2>
        <div className={styles.technologiesSection__content}>
          <AnimationBlock
            className={styles.technologiesSection__mainText}
            type="p"
          >
            {mainText}
          </AnimationBlock>
          <AnimationBlock
            className={styles.technologiesSection__secondaryText}
            type="p"
          >
            <span className={styles.technologiesSection__secondaryTextTitle}>
              Business Impact:
            </span>
            {secondaryText}
          </AnimationBlock>
        </div>
      </section>

      {!isLast && (
        <AnimatedLine
          targetRef={ref}
          x={-1400}
          className={styles.line}
        />
      )}
    </div>
  )
}

export default TechSection
