import cn from 'classnames/bind'
import type { FC } from 'react'

import { AnimationBlock } from '@/ui'

import styles from './index.module.scss'

interface IAdventage {
  title: string
  description: string[]
  className?: string
}

const cx = cn.bind(styles)

const Adventage: FC<IAdventage> = ({ className, title, description }) => (
  <div className={cx('adventage', className)}>
    <AnimationBlock
      type="p"
      className={styles.adventage__title}
    >
      {title}
    </AnimationBlock>
    {description.map((el, index) => (
      <AnimationBlock
        type="p"
        key={index}
        className={styles.adventage__text}
      >
        {el}
      </AnimationBlock>
    ))}
  </div>
)

export default Adventage
