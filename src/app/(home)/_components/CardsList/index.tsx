'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import type SwiperCore from 'swiper'
import { Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { AnimationBlock, Card, PaginatedButton, TextButton } from '@/ui'

import cards from '../../_constants/CARD'

import styles from './index.module.scss'

const CardsList: FC = ({}) => {
  const swiperRef = useRef<SwiperCore | null>(null)
  const draggingRef = useRef(false)
  const pathname = usePathname()

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update()
      swiperRef.current.slideTo(0)
    }
  }, [pathname])

  return (
    <AnimationBlock
      className={styles.cards}
      amount={0.3}
    >
      <Swiper
        onSwiper={swiper => (swiperRef.current = swiper)}
        onTouchStart={() => (draggingRef.current = false)}
        onTouchMove={() => (draggingRef.current = true)}
        keyboard={{ enabled: true }}
        modules={[Keyboard]}
        slidesPerView={'auto'}
        slidesPerGroup={1}
        className={styles.swiper}
        speed={1000}
        freeMode={{
          enabled: true,
          momentum: true,
          sticky: false,
          momentumRatio: 0.7,
          momentumVelocityRatio: 0.8,
        }}
        resistance={true}
        resistanceRatio={0.5}
        onTouchEnd={swiper => {
          draggingRef.current = false
          if (swiper.isEnd) {
            const slidesPerView = Number(swiper?.params?.slidesPerView ?? 1)
            swiper.slideTo(swiper.slides.length - slidesPerView)
          }
          if (swiper.isBeginning) {
            swiper.slideTo(0)
          }
        }}
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
              draggingRef={draggingRef}
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
        <Link href="/products">
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

export default CardsList
