'use client'

import cn from 'classnames/bind'
import Image from 'next/image'
import type { FC } from 'react'

import { AnimationBlock } from '@/ui'

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
}) => {
  return (
    <section className={cx('product', className)}>
      <AnimationBlock>
        <Image
          width={662}
          height={335}
          src={img}
          alt={title}
          priority
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
