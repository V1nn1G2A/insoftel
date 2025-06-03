import type { FC } from 'react'

import styles from './index.module.scss'

interface IItemCard {
  title: string
  content: string
  className?: string
}

const ItemCard: FC<IItemCard> = ({ className, title, content }) => (
  <div className={`${styles.card} ${className}`}>
    <p className={styles.card__title}>{title}</p>
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
  </div>
)

export default ItemCard
