'use client'

import cn from 'classnames'
import type { FC } from 'react'
import { useRef } from 'react'

import { useHeaderHeight } from '@/hooks'
import { useAnimatedWords } from '@/hooks'
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
  const isTablet = useMediaQuery('(max-width: 1439px)')
  const ref = useRef<HTMLDivElement>(null)
  const requestId = useRef<number>(null)
  const lenis = useLenis()
  const header = useHeaderHeight()

  const { activeWord, shouldDisappear, shouldShowT, hideWord } =
    useAnimatedWords(strings)

  const isActive = (letter: string, isMobile?: boolean) => {
    if (isMobile) return isTablet && activeWord === letter
    return !isTablet && activeWord === letter
  }

  const isActiveLetter = (word: string, letter: string): boolean => {
    return word.toLowerCase() === letter
  }

  return (
    <>
      <ScrollColorController sectionRef={ref} />
      <section
        className={styles.main}
        ref={ref}
        style={
          {
            '--count': activeWord.length,
          } as React.CSSProperties
        }
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
                    [styles.letterActive]: isActiveLetter(activeWord[0], 'i'),
                  })}
                >
                  I
                </BigLetter>
                {isActive('innovative') && (
                  <MainText direction="left">nnovative</MainText>
                )}
              </div>
              <div>
                {(!isActive('technologies') || shouldShowT) && (
                  <BigLetter
                    isAnimated={false}
                    className={cx(styles.letter, {
                      [styles.letterActive]:
                        isActiveLetter(activeWord[0], 't') || shouldShowT,
                      [styles.letterDissapear]: shouldDisappear,
                    })}
                  >
                    T
                  </BigLetter>
                )}
                {isActive('telecommunication') && !hideWord && (
                  <MainText hideWidth>elecommunication</MainText>
                )}
                {isActive('technologies') && !hideWord && (
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
                    [styles.letterActive]: isActiveLetter(activeWord[0], 's'),
                  })}
                >
                  S
                </BigLetter>
                {isActive('software') && (
                  <MainText direction="left">oftware</MainText>
                )}
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
