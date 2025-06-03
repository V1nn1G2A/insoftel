import type { FC } from 'react'

import styles from './index.module.scss'

interface IBigLetter {
  className?: string
  children: string
}

const BigLetter: FC<IBigLetter> = ({ className, children }) => (
  <p className={`${styles.letter} ${className}`}>{children}</p>
)

export default BigLetter
