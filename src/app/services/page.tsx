'use client'

import classNames from 'classnames/bind'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Container, TextButton } from '@/ui'
import SectionHeading from '@/ui/SectionHeading'

import { PaginatedBlock } from './_components'
import { servicesPagination } from './_constants/SERVICES'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollStart = 1386
  const sectionHeight = 600
  const totalSections = 5

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      // Если скролл ещё до начала
      if (scrollTop < scrollStart) {
        setActiveIndex(0)
        return
      }

      // Вычисляем, сколько "кусков" уже проскроллил
      const sectionIndex =
        Math.floor((scrollTop - scrollStart) / sectionHeight) + 1

      // Ограничиваем в пределах [0, totalSections - 1]
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
  }, [])

  return (
    <>
      <SectionHeading
        title="Services"
        letter="S"
      />
      <Container>
        <section className={cx('services-content')}>
          <div className={cx('services-wrapper')}>
            <div className={cx('services-absolute')}>
              {servicesPagination.map((page, index) => (
                <div
                  key={page.letter}
                  className={cx('content', page.letter)}
                  style={{
                    opacity: index === activeIndex ? 1 : 0,
                    transition: 'opacity .5s ease',
                  }}
                >
                  <PaginatedBlock
                    mainTitle={page.mainTitle}
                    headingText={page.headingText}
                    letter={page.letter}
                    paginatedInfo={page.paginatedInfo}
                  />
                </div>
              ))}
            </div>
            <div className={cx('button')}>
              <Link href={'/careers'}>
                <TextButton
                  text="Connect with Us"
                  variant="long"
                  colorVariant="dark"
                />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Services
