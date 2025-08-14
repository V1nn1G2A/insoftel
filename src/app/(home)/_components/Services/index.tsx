'use client'

import classNames from 'classnames/bind'
import { useInView } from 'motion/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import Logo from '@/assets/icons/imageDark.svg'
import {
  useHeaderHeight,
  useLenisScrollDirection,
  useMediaQuery,
} from '@/hooks'
import {
  AnimationBlock,
  Container,
  MotionSvg,
  Paragraph,
  SectionTitle,
  TextButton,
} from '@/ui'

import services from '../../_constants/SERVICE'
import { useInnerScrollLock } from '../../hooks'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerHeight = useHeaderHeight()
  const isDesktop = useMediaQuery('(min-width: 1280px)')
  const infoRef = useRef<HTMLDivElement>(null)
  const direction = useLenisScrollDirection()
  const isInView = useInView(sectionRef, {
    amount: 1,
    margin: direction === 'up' ? `-65px 0px 0px 0px` : '0px 0px 0px 0px',
  })
  useInnerScrollLock({
    ref: infoRef,
    isInView,
    isEnabled: isDesktop,
    scrollDuration: 600,
  })

  return (
    <Container className={cx('services-container')}>
      <section
        className={cx('services')}
        ref={sectionRef}
        style={{
          height: isDesktop
            ? `${window.innerHeight - headerHeight}px`
            : 'max-content',
        }}
      >
        <div className={cx('title-block')}>
          <SectionTitle
            index="01"
            className={styles.title}
          >
            Services
          </SectionTitle>
          <MotionSvg
            Svg={Logo}
            className={styles.logo}
            containerClassName={styles.logoContainer}
          />
        </div>

        <div
          className={cx('info-block')}
          ref={infoRef}
          style={{
            overflow: isDesktop ? 'auto' : 'hidden',
          }}
        >
          <AnimationBlock
            type="p"
            className={cx('text-top')}
          >
            Our solutions are tailored to empower businesses, government
            entities, and startups with cutting-edge technologies that drive
            efficiency, innovation, and growth
          </AnimationBlock>
          <div className={cx('grid')}>
            {services.map(service => (
              <Paragraph
                key={service.title}
                title={service.title}
                lines={service.lines}
                className={[styles.paragraph]}
              />
            ))}
          </div>
          <AnimationBlock>
            <Link
              href="/services"
              className={styles.link}
            >
              <TextButton
                text="Explore Our Services"
                variant="long"
                colorVariant="dark"
                classNames={[styles.button, styles.buttonText, '', '']}
              />
            </Link>
          </AnimationBlock>
        </div>
      </section>
    </Container>
  )
}

export default Services
