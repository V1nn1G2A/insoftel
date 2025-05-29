import type { FC } from 'react'

import PlusIcon from '@assets/icons/plus.svg'

import type { IPicture } from '../Picture/Picture'
import Picture from '../Picture/Picture'

import styles from './Card.module.scss'

interface ICard {
  className?: string
  title: string
  text: string
  picture: IPicture
}

const Card: FC<ICard> = ({ picture, title, text, className }) => (
  <div className={`${styles.card} ${className}`}>
    <Picture
      {...picture}
      className={styles.card__picture}
    />
    <div className={styles.card__content}>
      <div className={styles.card__title}>
        <p>{title}</p>
        <button>
          <PlusIcon />
        </button>
      </div>
      <div className={styles.card__text}>
        <p>{text}</p>
      </div>
    </div>
  </div>
)

export default Card
