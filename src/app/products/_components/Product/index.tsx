'use client'

import cn from 'classnames/bind'
import Image from 'next/image'
import type { FC } from 'react'

import { TextButton } from '@/ui'

import Adventage from '../Adventage'

import styles from './index.module.scss'

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
}) => (
  <section className={cx('product', className)}>
    <Image
      width={662}
      height={335}
      src={img}
      alt={title}
      className={styles.product__img}
    />
    <h3 className={styles.product__title}>{title}</h3>
    <p className={styles.product__content}>{mainContent}</p>
    {advantages.map((el, index) => (
      <Adventage
        key={index}
        {...el}
        className={styles.product__adventage}
      />
    ))}
    <TextButton
      text="Connect with Us"
      variant="short"
      classNames={[styles.product__btn]}
      colorVariant="dark"
    />
    {isLine && <span className={styles.product__line} />}
  </section>
)

export default Product
