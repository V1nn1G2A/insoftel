import cn from 'classnames/bind'
import type { FC } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Paragraph } from '@/ui'

import { IPaginatedInfo } from '../../model/IPagintedInfo'

import styles from './index.module.scss'

interface IScrollBlock {
  paragraphs: IPaginatedInfo[]
  className?: string
  paragraphClassName?: string
}

const cx = cn.bind(styles)

export const ScrolBlock: FC<IScrollBlock> = ({
  paragraphs,
  className,
  paragraphClassName,
}) => (
  <div className={cx('scrollblock', className)}>
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
    >
      {paragraphs.map(({ title, text, width }) => (
        <SwiperSlide key={title}>
          <Paragraph
            isAnimated={false}
            key={title}
            title={title}
            lines={[text]}
            width={width}
            className={[cx(paragraphClassName)]}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)
