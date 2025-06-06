'use client'

import classNames from 'classnames/bind'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Paragraph } from '@/ui'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IPaginatedInfo {
  title: string
  text: string
  width?: string
}

interface IPaginatedBlock {
  mainTitle: string
  headingText: string
  letter: string
  paginatedInfo: IPaginatedInfo[]
}

const PaginatedBlock: React.FC<IPaginatedBlock> = ({
  mainTitle = 'IT Consulting & Business Solutions',
  headingText = 'dsd',
  letter,
  paginatedInfo,
}) => (
  <div className={cx('paginated-block')}>
    <div className={cx('heading')}>
      <h2 className={cx('main-title')}>{mainTitle}</h2>
      <p className={cx('heading-text')}>{headingText}</p>
    </div>
    <div className={cx('line')}></div>
    <div className={cx('paginated-content')}>
      <span className={cx('letter')}>{letter}</span>
      <div className={cx('paginated-info')}>
        <div className={cx('paragraph-list')}>
          {paginatedInfo.map(paragraph => (
            <Paragraph
              isAnimated={false}
              key={paragraph.title}
              title={paragraph.title}
              lines={[`${paragraph.text}`]}
              className={['pagination-block', 'paginated-title']}
              width={paragraph.width}
            />
          ))}
        </div>
        <div className={cx('paragraph-paginate', 'mySwiperWrapper')}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
          >
            {paginatedInfo.map(paragraph => (
              <SwiperSlide key={paragraph.title}>
                <Paragraph
                  isAnimated={false}
                  title={paragraph.title}
                  lines={[`${paragraph.text}`]}
                  className={['pagination-block', 'paginated-title']}
                  width={paragraph.width}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
)

export default PaginatedBlock
