import type { FC, ReactNode } from 'react'

import styles from './StatsNumber.module.scss'

interface IStatsNumber {
  className?: string
  title: string
  children: ReactNode
}

const StatsNumber: FC<IStatsNumber> = ({ className, title, children }) => (
  <div className={`${styles.stats} ${className}`}>
    <span>{title}</span>
    <p>{children}</p>
  </div>
)

export default StatsNumber
