'use client'

import clsx from 'classnames'
import Image from 'next/image'
import { useRef } from 'react'

import { smoothAutoScroll } from '@/lib/smoothAutoScroll'
import { useLenis } from '@/providers'
import { AnimatedText, ScrollColorController } from '@/ui'

import { ExploreButton } from '../Buttons'
import Container from '../Container'

import styles from './index.module.scss'

const SectionHeading = ({
  title,
  letter,
}: {
  title: string
  letter: string
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis()
  let width

  switch (title) {
    case 'Services':
      width = '72.79px'
      break
    case 'Technologies':
      width = '117.68px'
  }

  return (
    <>
      <ScrollColorController sectionRef={sectionRef} />
      <div
        ref={sectionRef}
        className={styles.wrapper}
      >
        <Image
          className={styles.image}
          src={
            title === 'services'
              ? '/img/services/services.webp'
              : '/img/technologies/tech.webp'
          }
          alt="logo"
          width={1000}
          priority
          height={1000}
        />
        <Container>
          <div className={styles.heading}>
            <span className={styles.letter}>{letter}</span>
            <h1
              className={clsx(
                styles.title,
                title === 'Technologies' && styles.technologies
              )}
            >
              <AnimatedText height={230}>{title}</AnimatedText>
            </h1>
            <div
              className={styles.miniTitle}
              style={
                { '--width': width } as React.CSSProperties & {
                  [key: string]: string
                }
              }
            ></div>
            <div className={styles.miniButton}>
              <ExploreButton
                classNames={['mini-text', 'mini-round', 'mini-button']}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation()
                  smoothAutoScroll(lenis, sectionRef)
                }}
              />
            </div>
            <div className={styles.button}>
              <ExploreButton
                classNames={['mini-text']}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation()
                  smoothAutoScroll(lenis, sectionRef)
                }}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
export default SectionHeading
