'use client'

import type { FC } from 'react'
import { useRef } from 'react'
import type SwiperCore from 'swiper'
import { Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { AnimationBlock, Card, PaginatedButton, TextButton } from '@/ui'

import cards from '../../_constants/CARD'

import styles from './index.module.scss'

const CardsList: FC = ({}) => {
  const swiperRef = useRef<SwiperCore | null>(null)

  return (
    <AnimationBlock
      className={styles.cards}
      amount={0.3}
    >
      <Swiper
        onSwiper={swiper => (swiperRef.current = swiper)}
        keyboard={{ enabled: true }}
        modules={[Keyboard]}
        slidesPerView={'auto'}
      >
        {cards.map(card => (
          <SwiperSlide
            key={card.title}
            className={styles.slide}
          >
            <Card
              title={card.title}
              text={card.content}
              picture={card.picture}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <AnimationBlock className={styles.cards__btns}>
        <div className={styles.cards__pagination}>
          <PaginatedButton
            orientation="left"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <PaginatedButton
            orientation="right"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
        <TextButton
          text="Explore Our Products"
          variant="short"
          colorVariant="dark"
          className={styles.cards__explore}
        />
      </AnimationBlock>
    </AnimationBlock>
  )
}

export default CardsList
