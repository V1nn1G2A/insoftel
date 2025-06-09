import cn from 'classnames'
import Image from 'next/image'
import type { FC } from 'react'

import Adventage from '../Adventage'

import styles from './index.module.scss'

interface Iindex {
  className?: string
  img: string
  title: string
  mainContent: string
  advantages: { title: string; description: string[] }[]
}

const cx = cn.bind(styles)

const index: FC<Iindex> = ({
  className,
  img,
  title,
  mainContent,
  advantages,
}) => (
  <section className={cx('product', className)}>
    <Image
      width={662}
      height={335}
      src={img}
      alt={title}
    />
    <h3>{title}</h3>
    <p>{mainContent}</p>
    {advantages.map((el, index) => (
      <Adventage
        key={index}
        {...el}
      />
    ))}
  </section>
)

export default index
