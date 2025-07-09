'use client'

import cn from 'classnames'
import type { FC } from 'react'
import { useRef } from 'react'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { VideoBackground } from '@/ui'
import { BigLetter } from '@/ui'
import { ExploreButton } from '@/ui'
import { Container } from '@/ui'

import strings from '../../_constants/MAIN'
import useTypedText from '../../hooks/useTypedText'

import styles from './index.module.scss'

const cx = cn.bind(styles)

const Main: FC = ({}) => {
  const typingPlace = useRef<Record<string, null | HTMLSpanElement>>({
    center: null,
    i: null,
    s: null,
    t: null,
  })
  const isTablet = useMediaQuery('(max-width: 1340px)')
  const letter = useTypedText({
    isTablet,
    typingPlace,
    strings,
  })

  return (
    <section className={styles.main}>
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
                  [styles.letterActive]: letter === 'I',
                })}
              >
                I
              </BigLetter>
              <span
                ref={ref => {
                  typingPlace.current.i = ref
                }}
              />
            </div>
            <div>
              <BigLetter
                isAnimated={false}
                className={cx(styles.letter, {
                  [styles.letterActive]: letter === 'T',
                })}
              >
                T
              </BigLetter>
              <span
                ref={ref => {
                  typingPlace.current.t = ref
                }}
              />
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.typed}>
              <span
                ref={ref => {
                  typingPlace.current.center = ref
                }}
              />
            </div>
            <p className={styles.text}>Your Vision . Our Code</p>
          </div>
          <div className={styles.bottom}>
            <div>
              <BigLetter
                isAnimated={false}
                className={cx(styles.letter, {
                  [styles.letterActive]: letter === 'S',
                })}
              >
                S
              </BigLetter>
              <span
                ref={ref => {
                  typingPlace.current.s = ref
                }}
              />
            </div>
            <ExploreButton classNames={['', '', styles.exploreButton]} />
          </div>
        </Container>
      </VideoBackground>
    </section>
  )
}

export default Main
