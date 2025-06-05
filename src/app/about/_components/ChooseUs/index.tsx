import type { FC } from 'react'

import { AnimationBlock, Container, SectionTitle } from '@/ui'

import items from '../../_constants/ITEM_CARD'
import ItemCard from '../ItemCard'

import styles from './index.module.scss'

const ChooseUs: FC = ({}) => (
  <section className={styles.choose}>
    <Container>
      <SectionTitle
        index="03"
        className={styles.choose__title}
      >
        Why Choose Us?
      </SectionTitle>
      <AnimationBlock className={styles.cards}>
        {items.map(item => (
          <ItemCard
            key={item.title}
            title={item.title}
            content={item.content}
            className={styles.card}
          />
        ))}
      </AnimationBlock>
    </Container>
  </section>
)

export default ChooseUs
