import type { FC } from 'react'

import { AnimatedText, Container, ItemCard } from '@/ui'

import items from '../../constants/ITEM_CARD'

import styles from './index.module.scss'

const ChooseUs: FC = ({}) => (
  <section className={styles.choose}>
    <Container>
      <h2 className={styles.choose__title}>
        <AnimatedText height={50}>Why Insoftel?</AnimatedText>
      </h2>
      <div className={styles.cards}>
        {items.map(item => (
          <ItemCard
            key={item.title}
            title={item.title}
            content={item.content}
            className={styles.card}
          />
        ))}
      </div>
    </Container>
  </section>
)

export default ChooseUs
