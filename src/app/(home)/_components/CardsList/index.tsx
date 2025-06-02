'use client'

import type { FC } from 'react'
import { useRef } from 'react'
import type SwiperCore from 'swiper'
import { Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Card } from '@/ui'
import { TextButton } from '@/ui/Buttons'
import { PaginatedButton } from '@/ui/Buttons'

import cards from '../../_constants/CARD'

import styles from './index.module.scss'

const CardsList: FC = ({}) => {
  const swiperRef = useRef<SwiperCore | null>(null)

  return (
    <div className={styles.cards}>
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
      <div className={styles.cards__btns}>
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
      </div>
    </div>
  )
}

export default CardsList
