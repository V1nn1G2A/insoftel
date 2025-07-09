'use client'

import type { FC } from 'react'

import Logo from '@/assets/icons/imageDark.svg'
import {
  AnimationBlock,
  BigLetter,
  Container,
  MotionSvg,
  SectionTitle,
  StatsNumber,
} from '@/ui'

import styles from './index.module.scss'

const AboutUs: FC = ({}) => (
  <section
    className={styles.about}
    id="AboutContent"
  >
    <Container>
      <div className={styles.letters}>
        <BigLetter>I</BigLetter>
        <BigLetter>T</BigLetter>
      </div>
      <div className={styles.container}>
        <SectionTitle index="01">About Us</SectionTitle>
        <div className={styles.about__content}>
          <AnimationBlock
            type="p"
            className={styles.about__text}
          >
            Insoftel empowers businesses and government organisations with
            bespoke software solutions crafted for the digital age. With over 15
            years of experience and a team of 50+ expert developers, our company
            brings your mission to life by blending innovation with precision,
            helping you stand out in a complex world
          </AnimationBlock>
          <StatsNumber
            title="50+"
            className={styles.company__stats}
          >
            advanced <br /> developers
          </StatsNumber>
          <StatsNumber
            title="15+"
            className={styles.company__stats}
          >
            years <br />
            of experience
          </StatsNumber>
          <MotionSvg
            Svg={Logo}
            className={styles.about__img}
            containerClassName={styles.about__imgContainer}
          />
        </div>
      </div>
    </Container>
  </section>
)

export default AboutUs
