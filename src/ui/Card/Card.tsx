'use client'

import cn from 'classnames'
import Image from 'next/image'
import type { FC } from 'react'
import { useState } from 'react'

import PlusIcon from '@assets/icons/plus.svg'

import styles from './Card.module.scss'

interface ICard {
  className?: string
  title: string
  text: string
  picture: string
}

const cx = cn.bind(styles)

const Card: FC<ICard> = ({ picture, title, text, className }) => {
  const [isActive, setIsActive] = useState(false)

  const classNames = cx(styles.card, className, {
    [styles['card--active']]: isActive,
  })

  const handleOpen = () => {
    setIsActive(prev => !prev)
  }

  return (
    <div
      className={classNames}
      onClick={handleOpen}
    >
      <Image
        src={picture}
        width={435}
        height={434}
        alt={title}
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
}

export default Card
