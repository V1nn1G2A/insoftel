import Arrow from '@assets/icons/arrow.svg'
import type { FC } from 'react'

import styles from './Accordion.module.scss'

interface IAccordion {
  title: string
  className?: string
  content: string[]
  isLine?: boolean
}

const Accordion: FC<IAccordion> = ({
  title,
  className,
  content,
  isLine = true,
}) => (
  <div className={`${styles.accordion} ${className}`}>
    <input
      type="checkbox"
      id={`${title}-toggle`}
      className={styles.toggle}
    />
    <label
      htmlFor={`${title}-toggle`}
      className={styles.accordion__title}
    >
      <p>
        [ {title} ]
        <sup className={styles['card__content-counter']}>{content.length}</sup>
      </p>
      <span className={styles.accordion__btn}>
        <Arrow />
      </span>
    </label>
    <div className={styles.accordion__content}>
      <div>
        <p>{content.join(', ')}</p>
      </div>
    </div>
    {isLine && <span className={styles.accordion__line}></span>}
  </div>
)

export default Accordion
