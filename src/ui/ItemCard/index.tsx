import type { FC } from 'react'

import { AnimationBlock } from '@/ui'

import styles from './index.module.scss'

interface IItemCard {
  title: string
  content: string | string[]
  className?: string
}

const ItemCard: FC<IItemCard> = ({ className, title, content }) => (
  <AnimationBlock className={`${styles.card} ${className}`}>
    <p
      className={styles.card__title}
      id={title}
    >
      {title}
    </p>
    <div>
      {Array.isArray(content) ? (
        content.map(item => (
          <p
            className={styles.card__content}
            key={item}
          >
            {item}
          </p>
        ))
      ) : (
        <p className={styles.card__content}>{content}</p>
      )}
    </div>
  </AnimationBlock>
)

export default ItemCard
