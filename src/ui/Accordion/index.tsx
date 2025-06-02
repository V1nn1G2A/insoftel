import cn from 'classnames'
import type { FC } from 'react'

import Arrow from '@/assets/icons/arrow.svg'

import styles from './index.module.scss'

interface IAccordion {
  title: string
  className?: string
  content: string[]
  isLine?: boolean
  isActive?: boolean
  onClick: () => void
}

const cx = cn.bind(styles)

const Accordion: FC<IAccordion> = ({
  title,
  className,
  content,
  isLine = true,
  isActive,
  onClick,
}) => {
  const classNames = cx(
    styles.accordion,
    { [styles['accordion--active']]: isActive },
    className
  )

  return (
    <div className={classNames}>
      <div
        className={styles.accordion__title}
        onClick={onClick}
      >
        <p>
          [ {title} ]
          <sup className={styles['card__content-counter']}>
            {content.length}
          </sup>
        </p>
        <span className={styles.accordion__btn}>
          <Arrow />
        </span>
      </div>
      <div className={styles.accordion__content}>
        <div>
          <p>{content.join(', ')}</p>
        </div>
      </div>
      {isLine && <span className={styles.accordion__line}></span>}
    </div>
  )
}

export default Accordion
