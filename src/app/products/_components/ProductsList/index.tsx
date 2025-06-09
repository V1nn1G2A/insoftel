import cn from 'classnames/bind'
import type { FC } from 'react'

import { BigLetter, Container } from '@/ui'

import mainProduct from '../../_constants/MAIN_PRODUCT'
import products from '../../_constants/PRODUCT'
import MainProduct from '../MainProduct'
import Product from '../Product'

import styles from './index.module.scss'

interface IProductsList {
  className?: string
}

const cx = cn.bind(styles)

const ProductsList: FC<IProductsList> = ({ className }) => (
  <Container>
    <section className={cx('products', className)}>
      <MainProduct {...mainProduct} />
      <div className={styles.products__list}>
        {products.map((el, index) => (
          <Product
            key={index}
            {...el}
            className={styles.product}
            isLine={index !== products.length - 1}
          />
        ))}
      </div>
      <div className={cx('letters')}>
        <BigLetter>I</BigLetter>
        <BigLetter>T</BigLetter>
      </div>
    </section>
  </Container>
)

export default ProductsList
