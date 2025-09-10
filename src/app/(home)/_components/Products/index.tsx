import type { FC } from 'react'

import { Container } from '@/ui'
import { SectionTitle } from '@/ui'

import CardsList from '../CardsList'
import MobileCardsList from '../MobileCardList'

import styles from './index.module.scss'

const Products: FC = ({}) => (
  <section className={styles.products}>
    <Container>
      <SectionTitle
        className={styles.products__title}
        index="04"
      >
        Products
      </SectionTitle>
      <CardsList />
      <MobileCardsList />
    </Container>
  </section>
)

export default Products
