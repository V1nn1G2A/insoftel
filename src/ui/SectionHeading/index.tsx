'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

import { useHeaderHeight } from '@/hooks'
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
  const ref = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const typedRef = useRef<Typed | null>(null)
  const lenis = useLenis()
  const height = useHeaderHeight()
  let width

  switch (title) {
    case 'Services':
      width = '72.79px'
      break
    case 'Technologies':
      width = '117.68px'
  }

  useEffect(() => {
    if (!ref.current) return

    typedRef.current = new Typed(ref.current, {
      strings: [title || 'hello'],
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 2000,
      showCursor: true,
      loop: true,
      cursorChar: '|',
      autoInsertCss: true,
    })

    return () => {
      typedRef.current?.destroy()
    }
  }, [title])

  return (
    <>
      <ScrollColorController sectionRef={sectionRef} />
      <div
        ref={sectionRef}
        className={styles.wrapper}
      >
        <Image
          className={styles.image}
          src="/img/services/services.webp"
          alt="logo"
          width={1000}
          height={1000}
        />
        <Container>
          <div className={styles.heading}>
            <span className={styles.letter}>{letter}</span>
            <h1 className={styles.title}>
              <AnimatedText height={230}>{title}</AnimatedText>
            </h1>
            <div
              className={styles.miniTitle}
              style={
                { '--width': width } as React.CSSProperties & {
                  [key: string]: string
                }
              }
            >
              <h1 ref={ref} />
            </div>
            <div className={styles.miniButton}>
              <ExploreButton
                classNames={['mini-text', 'mini-round', 'mini-button']}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation()
                  smoothAutoScroll(
                    lenis,
                    (sectionRef.current?.scrollHeight ?? 0) - height
                  )
                }}
              />
            </div>
            <div className={styles.button}>
              <ExploreButton
                classNames={['mini-text']}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation()
                  smoothAutoScroll(
                    lenis,
                    (sectionRef.current?.scrollHeight ?? 0) - height
                  )
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
