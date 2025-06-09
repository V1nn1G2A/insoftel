import cn from 'classnames'
import type { FC } from 'react'

import products from '../../_constants/PRODUCT'
import Product from '../Product'

import styles from './index.module.scss'

interface Iindex {
  className?: string
}

const cx = cn.bind(styles)

const index: FC<Iindex> = ({ className }) => (
  <section className={cx('products', className)}>
    {products.map((el, index) => (
      <Product
        key={index}
        {...el}
      />
    ))}
  </section>
)

export default index
