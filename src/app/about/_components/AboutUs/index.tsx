import Image from 'next/image'
import type { FC } from 'react'

import { SectionTitle } from '@/ui'
import { StatsNumber } from '@/ui'
import { Container } from '@/ui'
import { BigLetter } from '@/ui'

import styles from './index.module.scss'

const AboutUs: FC = ({}) => (
  <section className={styles.about}>
    <Container>
      <div className={styles.letters}>
        <BigLetter>I</BigLetter>
        <BigLetter>T</BigLetter>
      </div>
      <div className={styles.container}>
        <SectionTitle index="01">About Us</SectionTitle>
        <div className={styles.about__content}>
          <p className={styles.about__text}>
            Insoftel empowers businesses and government organisations with
            bespoke software solutions crafted for the digital age. With over 15
            years of experience and a team of 50+ expert developers, our company
            brings your mission to life by blending innovation with precision,
            helping you stand out in a complex world
          </p>
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
          <Image
            width={348}
            height={343}
            src="/img/services/1.png"
            alt="Visual Picture"
            className={styles.about__img}
          />
        </div>
      </div>
    </Container>
  </section>
)

export default AboutUs
