'use client'

import cn from 'classnames/bind'
import Image from 'next/image'
import type { FC, RefObject } from 'react'
import { useState } from 'react'

import PlusIcon from '@assets/icons/plus.svg'

import styles from './index.module.scss'

interface ICard {
  className?: string
  title: string
  text: string
  picture: string
  draggingRef: RefObject<boolean>
}

const cx = cn.bind(styles)

const Card: FC<ICard> = ({ picture, title, text, className, draggingRef }) => {
  const [isActive, setIsActive] = useState(false)

  const classNames = cx(styles.card, className, {
    [styles['card--active']]: isActive,
  })

  const handleOpen = (e: React.MouseEvent) => {
    if (draggingRef.current) return
    e.stopPropagation()
    setIsActive(prev => !prev)
  }

  const handleClose = () => {
    setIsActive(false)
  }

  return (
    <div
      className={classNames}
      onClick={handleClose}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={picture}
          width={435}
          height={434}
          alt={title}
          onClick={handleOpen}
        />
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__title}>
          <p>{title}</p>
          <button
            onClick={handleOpen}
            className={styles.card__button}
          >
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
