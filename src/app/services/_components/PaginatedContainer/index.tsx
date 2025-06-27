'use client'

import cn from 'classnames/bind'
import { type FC, useEffect, useState } from 'react'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { servicesPagination } from '../../_constants/SERVICES'
import PaginatedBlock from '../PaginatedBlock/PaginatedBlock'

import styles from './index.module.scss'

interface IPaginatedContainer {
  className?: string
}

const cx = cn.bind(styles)

export const PaginatedContainer: FC<IPaginatedContainer> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const isDesk = useMediaQuery('1440px')

  const scrollStart = 1386
  const sectionHeight = isDesk ? 1024 : 844
  const totalSections = 5

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop < scrollStart) {
        setActiveIndex(0)
        return
      }

      const sectionIndex =
        Math.floor((scrollTop - scrollStart) / sectionHeight) + 1

      const clampedIndex = Math.min(
        Math.max(sectionIndex, 0),
        totalSections - 1
      )

      setActiveIndex(clampedIndex)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionHeight])

  return (
    <section className={cx('container', className)}>
      {servicesPagination.map((page, index) => (
        <div
          key={page.letter}
          className={cx('content', page.letter)}
          style={{
            opacity: index === activeIndex ? 1 : 0,
            transition: 'opacity .5s ease',
            zIndex: index === activeIndex ? 1 : 0,
          }}
        >
          <PaginatedBlock
            id={page.id}
            mainTitle={page.mainTitle}
            headingText={page.headingText}
            letter={page.letter}
            paginatedInfo={page.paginatedInfo}
            letterClassName={cx('letter')}
            headerClassName={cx('sectionHeader')}
            contectClassName={cx('paginationContent')}
            buttonClassName={cx('paginationButton')}
            buttonWrapperClassName={cx('paginationButtonWrapper')}
          />
        </div>
      ))}
    </section>
  )
}
