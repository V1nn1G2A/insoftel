'use client'

import cn from 'classnames/bind'
import Image from 'next/image'
import type { FC } from 'react'

import { AnimationBlock, TelegramPopup, TextButton } from '@/ui'
import { usePopupDispatch } from '@/ui/Popup/PopupContext'

import Adventage from '../Adventage'

import styles from './index.module.scss'

interface IMainProduct {
  className?: string
  img: string
  title: string
  mainContent: string
  advantages: { title: string; description: string[] }[]
  isLine?: boolean
}

const cx = cn.bind(styles)

const MainProduct: FC<IMainProduct> = ({
  className,
  img,
  title,
  mainContent,
  advantages,
  isLine,
}) => {
  const { openPopup } = usePopupDispatch()

  const handleOpenInfo = () => {
    openPopup(<TelegramPopup />)
  }

  return (
    <section className={cx('product', className)}>
      <Image
        width={1619}
        height={867}
        src={img}
        alt={title}
        priority
        className={styles.product__img}
      />
      <AnimationBlock
        type="h3"
        className={styles.product__title}
      >
        {title}
      </AnimationBlock>
      <div className={styles.product__contentWrapper}>
        <div className={styles.product__textWrapper}>
          <AnimationBlock
            type="p"
            className={styles.product__content}
          >
            {mainContent}
          </AnimationBlock>
        </div>
        <div className={styles.product__adventages}>
          {advantages.map((el, index) => (
            <Adventage
              key={index}
              {...el}
              className={styles.product__adventage}
            />
          ))}
        </div>
      </div>
      <AnimationBlock>
        <TextButton
          onClick={handleOpenInfo}
          text="Connect with Us"
          variant="short"
          classNames={[styles.product__btn]}
          colorVariant="dark"
        />
      </AnimationBlock>
      {isLine && (
        <AnimationBlock
          type="span"
          className={styles.product__line}
        />
      )}
    </section>
  )
}
export default MainProduct
