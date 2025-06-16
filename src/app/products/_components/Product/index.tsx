'use client'

import cn from 'classnames/bind'
import Image from 'next/image'
import type { FC } from 'react'

import { AnimationBlock, TelegramPopup, TextButton } from '@/ui'

import Adventage from '../Adventage'

import styles from './index.module.scss'
import { usePopupDispatch  } from '@/ui/Popup/PopupContext'

interface IProduct {
  className?: string
  img: string
  title: string
  mainContent: string
  advantages: { title: string; description: string[] }[]
  isLine?: boolean
}

const cx = cn.bind(styles)

const Product: FC<IProduct> = ({
  className,
  img,
  title,
  mainContent,
  advantages,
  isLine = true,
}) => {
  const { openPopup } = usePopupDispatch();
  
  const handleOpenInfo = () => {
    openPopup(<TelegramPopup />);
  };

  return (
  <section className={cx('product', className)}>
    <AnimationBlock>
      <Image
        width={662}
        height={335}
        src={img}
        alt={title}
        className={styles.product__img}
      />
    </AnimationBlock>
    <AnimationBlock
      type="h3"
      className={styles.product__title}
    >
      {title}
    </AnimationBlock>
    <AnimationBlock
      type="p"
      className={styles.product__content}
    >
      {mainContent}
    </AnimationBlock>
    {advantages.map((el, index) => (
      <Adventage
        key={index}
        {...el}
        className={styles.product__adventage}
      />
    ))}
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
export default Product
