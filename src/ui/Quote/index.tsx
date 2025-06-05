import type { FC } from 'react'

import { AnimationBlock } from '../'

import styles from './index.module.scss'

interface IQuote {
  author: string
  className?: string
  children: string
}

const Quote: FC<IQuote> = ({ author, className, children }) => (
  <div className={`${styles.quote} ${className}`}>
    <AnimationBlock>
      <AnimationBlock className={styles.quote__content}>
        &quot; {children} &quot;
      </AnimationBlock>
      <AnimationBlock>
        <p className={styles.quote__author}>{author}</p>
      </AnimationBlock>
    </AnimationBlock>
  </div>
)

export default Quote
