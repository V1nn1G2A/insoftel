'use client'

import cn from 'classnames'
import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'

import { useHeaderHeight } from '@/hooks'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useLenis } from '@/providers'
import { VideoBackground } from '@/ui'
import { BigLetter } from '@/ui'
import { ExploreButton } from '@/ui'
import { Container } from '@/ui'
import { ScrollColorController } from '@/ui'

import { MainText } from '../'
import { smoothAutoScroll } from '../../../../lib/smoothAutoScroll'
import strings from '../../_constants/MAIN'

import styles from './index.module.scss'

const cx = cn.bind(styles)

const Main: FC = ({}) => {
  const isTablet = useMediaQuery('(max-width: 1400px)')
  const ref = useRef<HTMLDivElement>(null)
  const requestId = useRef<number>(null)
  const lenis = useLenis()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeLetter = strings[activeIndex]
  const header = useHeaderHeight()

  const isActive = (letter: string, isMobile?: boolean) => {
    if (isMobile) return isTablet && strings[activeIndex] === letter
    return !isTablet && strings[activeIndex] === letter
  }

  const setNextIndex = () => {
    setActiveIndex(prev => {
      if (prev === strings.length - 1) return 0
      else return ++prev
    })
  }

  useEffect(() => {
    const interval = setInterval(setNextIndex, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <ScrollColorController sectionRef={ref} />
      <section
        className={styles.main}
        ref={ref}
      >
        <VideoBackground
          src="/video/background.mp4"
          className={styles.video}
        >
          <Container>
            <div className={styles.top}>
              <div>
                <BigLetter
                  isAnimated={false}
                  className={cx(styles.letter, {
                    [styles.letterActive]: activeLetter === 'I',
                  })}
                >
                  I
                </BigLetter>
                {isActive('innovative') && <MainText>nnovative</MainText>}
              </div>
              <div>
                <BigLetter
                  isAnimated={false}
                  className={cx(styles.letter, {
                    [styles.letterActive]: activeLetter === 'T',
                  })}
                >
                  T
                </BigLetter>
                {isActive('telecommunication') && (
                  <MainText hideWidth>elecommunication</MainText>
                )}
                {isActive('technologies') && (
                  <MainText hideWidth>echnologies</MainText>
                )}
              </div>
            </div>
            <div className={styles.center}>
              <div className={styles.typed}>
                {isActive('innovative', true) && (
                  <MainText>innovative</MainText>
                )}
                {isActive('software', true) && <MainText>software</MainText>}
                {isActive('telecommunication', true) && (
                  <MainText>telecommunication</MainText>
                )}
                {isActive('technologies', true) && (
                  <MainText>technologies</MainText>
                )}
              </div>
              <p className={styles.text}>Your Vision . Our Code</p>
            </div>
            <div className={styles.bottom}>
              <div>
                <BigLetter
                  isAnimated={false}
                  className={cx(styles.letter, {
                    [styles.letterActive]: activeLetter === 'S',
                  })}
                >
                  S
                </BigLetter>
                {isActive('software') && <MainText>oftware</MainText>}
              </div>
              <ExploreButton
                classNames={['', '', styles.exploreButton]}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation()
                  smoothAutoScroll(
                    requestId,
                    lenis,
                    (ref.current?.scrollHeight ?? 0) - header
                  )
                }}
              />
            </div>
          </Container>
        </VideoBackground>
      </section>
    </>
  )
}

export default Main
