import type { FC } from 'react'

import { AnimationBlock } from '../'

import styles from './index.module.scss'

interface IQuote {
  author: string
  className?: string
  children: string
  id?: string
}

const Quote: FC<IQuote> = ({ author, className, children, id }) => (
  <div
    className={`${styles.quote} ${className}`}
    id={id}
  >
    <div className={styles.wrapper}>
      <AnimationBlock
        className={styles.quote__content}
        type="p"
      >
        &quot; {children} &quot;
      </AnimationBlock>
      <AnimationBlock
        type="p"
        className={styles.quote__author}
      >
        {author}
      </AnimationBlock>
    </div>
  </div>
)

export default Quote
