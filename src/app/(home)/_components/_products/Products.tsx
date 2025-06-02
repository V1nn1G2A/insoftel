import type { FC } from 'react'

import { Container } from '@/ui/Container'
import { SectionTitle } from '@/ui/SectionTitle'

import { CardsList } from '../_cardsList'

import styles from './Products.module.scss'

const Products: FC = ({}) => (
  <section className={styles.products}>
    <Container>
      <SectionTitle index="04">Products</SectionTitle>
      <CardsList />
    </Container>
  </section>
)

export default Products
