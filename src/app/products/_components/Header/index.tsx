'use client'

import { type FC, useRef } from 'react'

import { smoothAutoScroll } from '@/lib/smoothAutoScroll'
import { useLenis } from '@/providers'
import { BigLetter, ScrollColorController } from '@/ui'
import { Container } from '@/ui'
import { AnimatedText, AnimationBlock, ExploreButton } from '@/ui'

import styles from './index.module.scss'

interface IHeader {
  className?: string
}

const Header: FC<IHeader> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null)
  const lenis = useLenis()

  return (
    <>
      <ScrollColorController sectionRef={ref} />
      <Container>
        <div
          className={`${styles.header} ${className}`}
          ref={ref}
        >
          <div className={styles.header__main}>
            <h2 className={styles.header__title}>
              <AnimatedText height={50}>Our Products</AnimatedText>
            </h2>
            <div className={styles.header__contentWrapper}>
              <AnimationBlock
                type="p"
                className={styles.header__content}
              >
                Discover innovative solutions that redefine smart living,
                industrial automation, financial management, and creative
                content distribution. With advanced technologies, our products
                are designed to deliver real-world impact, making everyday
                challenges simpler and more efficient.
              </AnimationBlock>
              <ExploreButton
                colorVariant="dark"
                text="Explore"
                classNames={['', '', styles.explore]}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation()
                  smoothAutoScroll(lenis, ref)
                }}
              />
            </div>
          </div>
          <div className={styles.header__back}>
            <BigLetter>S</BigLetter>
            <BigLetter>T</BigLetter>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header
