'use client'

import Link from 'next/link'
import type { FC } from 'react'
import { useRef } from 'react'

import { AnimationBlock, Card, TextButton } from '@/ui'

import cards from '../../_constants/CARD'

import styles from './index.module.scss'

const MobileCardsList: FC = ({}) => {
  const draggingRef = useRef(false)

  return (
    <AnimationBlock
      className={styles.cards}
      amount={0.3}
    >
      <div className={styles.cards}>
        {cards.map(card => (
          <Card
            key={card.title}
            title={card.title}
            text={card.content}
            picture={card.picture}
            draggingRef={draggingRef}
          />
        ))}
      </div>
      <AnimationBlock className={styles.cards__btns}>
        <Link
          href="/products"
          className={styles.linkButton}
        >
          <TextButton
            text="Explore Our Products"
            variant="short"
            colorVariant="dark"
            classNames={[styles.cards__explore]}
          />
        </Link>
      </AnimationBlock>
    </AnimationBlock>
  )
}

export default MobileCardsList
