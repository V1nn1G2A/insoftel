'use client'

import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import { Container, TelegramPopup, TextButton } from '@/ui'
import SectionHeading from '@/ui/SectionHeading'

import { PaginatedBlock } from './_components'
import { servicesPagination } from './_constants/SERVICES'

import styles from './index.module.scss'
import { usePopup } from '@/ui/Popup/PopupContext'

const cx = classNames.bind(styles)

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { openPopup } = usePopup()

  const handleOpenInfo = () => {
    openPopup(<TelegramPopup />);
  };

  const scrollStart = 1386
  const sectionHeight = 600
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
                <TextButton
                  onClick={handleOpenInfo}
                  text="Connect with Us"
                  variant="long"
                  colorVariant="dark"
                />
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Services
