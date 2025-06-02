import type { FC } from 'react'

import { Container } from '@/ui'
import { SectionTitle } from '@/ui'

import CardsList from '../CardsList'

import styles from './index.module.scss'

const Products: FC = ({}) => (
  <section className={styles.products}>
    <Container>
      <SectionTitle index="04">Products</SectionTitle>
      <CardsList />
    </Container>
  </section>
)

export default Products
