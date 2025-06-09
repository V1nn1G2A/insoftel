import cn from 'classnames/bind'
import Image from 'next/image'
import type { FC } from 'react'

import { TextButton } from '@/ui'

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
}) => (
  <section className={cx('product', className)}>
    <Image
      width={1344}
      height={720}
      src={img}
      alt={title}
      className={styles.product__img}
    />
    <h3 className={styles.product__title}>{title}</h3>
    <div className={styles.product__contentWrapper}>
      <p className={styles.product__content}>{mainContent}</p>
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
    <TextButton
      text="Connect with Us"
      variant="short"
      classNames={[styles.product__btn]}
      colorVariant="dark"
    />
    {isLine && <span className={styles.product__line} />}
  </section>
)

export default MainProduct
