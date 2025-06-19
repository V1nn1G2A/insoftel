'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

import { AnimatedText } from '@/ui'

import { ExploreButton } from '../Buttons'
import Container from '../Container'
import VideoBackground from '../VideoBackground'

import styles from './index.module.scss'

const SectionHeading = ({
  title,
  letter,
}: {
  title: string
  letter: string
}) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const typedRef = useRef<Typed | null>(null)
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
    <div>
      <VideoBackground
        src={'/video/section-background.mp4'}
        className="section"
      >
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
              />
            </div>
            <div className={styles.button}>
              <ExploreButton classNames={['mini-text']} />
            </div>
          </div>
        </Container>
      </VideoBackground>
    </div>
  )
}
export default SectionHeading
