import type { FC } from 'react'

import styles from './Quote.module.scss'

interface IQuote {
  author: string
  className?: string
  children: string
}

const Quote: FC<IQuote> = ({ author, className, children }) => (
  <div className={`${styles.quote} ${className}`}>
    <div>
      <p className={styles.quote__content}>&quot; {children} &quot;</p>
      <p className={styles.quote__author}>{author}</p>
    </div>
  </div>
)

export default Quote
