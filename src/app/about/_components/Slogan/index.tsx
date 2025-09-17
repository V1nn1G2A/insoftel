'use client'

import { type FC, useRef } from 'react'

import { smoothAutoScroll } from '@/lib/smoothAutoScroll'
import { useLenis } from '@/providers'
import { BigLetter, ScrollColorController } from '@/ui'
import { Container } from '@/ui'
import { AnimatedText, ExploreButton } from '@/ui'

import styles from './index.module.scss'

interface ISlogan {
  className?: string
}

const Slogan: FC<ISlogan> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null)
  const lenis = useLenis()

  return (
    <>
      <ScrollColorController sectionRef={ref} />
      <div
        className={`${styles.slogan} ${className}`}
        ref={ref}
      >
        <Container>
          <div className={styles.slogan__text}>
            <p>
              <AnimatedText height={92}>Insoftel Technologies –</AnimatedText>
            </p>
            <p>
              <AnimatedText height={92}>Your Vision, Our Code</AnimatedText>
            </p>
          </div>
          <ExploreButton
            colorVariant="dark"
            text="Unpack the Solutions"
            classNames={['', '', styles.explore]}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              smoothAutoScroll(lenis, ref)
            }}
          />
          <div className={styles.slogan__back}>
            <BigLetter>S</BigLetter>

            <ExploreButton
              colorVariant="dark"
              text="Unpack the Solutions"
              classNames={['', '', styles.explores]}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                smoothAutoScroll(lenis, ref)
              }}
            />

            <BigLetter>T</BigLetter>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Slogan
