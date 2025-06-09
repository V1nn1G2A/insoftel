import cn from 'classnames'
import type { FC } from 'react'

import styles from './index.module.scss'

interface IAdventage {
  title: string
  description: string[]
  className?: string
}

const cx = cn.bind(styles)

const Adventage: FC<IAdventage> = ({ className, title, description }) => (
  <div className={cx('adventage', className)}>
    <p>{title}</p>
    {description.map((el, index) => (
      <p key={index}>{el}</p>
    ))}
  </div>
)

export default Adventage
