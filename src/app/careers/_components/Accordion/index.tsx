'use client'

import cn from 'classnames/bind'
import type { FC } from 'react'

import Arrow from '@/assets/icons/arrow.svg'
import { AnimationBlock } from '@/ui'

import styles from './index.module.scss'

interface IAccordion {
  title: string
  className?: string
  children?: React.ReactNode
  isActive?: boolean
  onClick: () => void
}

const cx = cn.bind(styles)

const Accordion: FC<IAccordion> = ({
  title,
  className,
  children,
  isActive,
  onClick,
}) => {
  return (
    <AnimationBlock
      className={cx('accordion', className, {
        ['accordion--active']: isActive,
      })}
    >
      <div
        className={styles.trigger}
        onClick={onClick}
      >
        <p className={styles.triggerTitle}>{title}</p>
        <span className={styles.triggerIconWrapper}>
          <span className={styles.triggerIconLabel}>Learn More</span>
          <Arrow />
        </span>
      </div>
      <div className={styles.content}>{children}</div>
    </AnimationBlock>
  )
}

export default Accordion
