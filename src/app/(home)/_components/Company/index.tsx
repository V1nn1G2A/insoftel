import Link from 'next/link'

import { Container } from '@/ui'
import { Quote } from '@/ui'
import { SectionTitle } from '@/ui'
import { StatsNumber } from '@/ui'
import { TextButton } from '@/ui/Buttons'

import OfficeInfo from '../OfficeInfo'
import Slogan from '../Slogan'

import styles from './index.module.scss'

const Company = () => (
  <section className={styles.company}>
    <Container className={styles.company__container}>
      <div className={styles.company__header}>
        <SectionTitle
          index="03"
          className={styles.company__title}
          textClassName={styles.company__title__text}
          indexClassName={styles.company__title__index}
        >
          Company
        </SectionTitle>
        <Slogan />
      </div>
      <Quote
        author="Founder of Insoftel Technologies"
        className={styles.company__quote}
        wrapperClassName={styles.company__quote__wrapper}
        contentClassName={styles.company__quote__content}
        authorClassName={styles.company__quote__author}
      >
        At Insoftel Technologies, custom software is just the beginning. By
        combining deep software expertise with hardware integration, we create
        adaptable, high-impact solutions that empower clients to lead with
        confidence and innovation
      </Quote>
      <div className={styles.company__info}>
        <OfficeInfo className={styles.company__office} />
        <div className={styles.company__statsContainer}>
          <div className={styles.company__statsContent}>
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
          </div>
          <Link
            href="/about"
            className={styles.company__deskBtn}
          >
            <TextButton
              text="More About Us"
              variant="short"
              colorVariant="dark"
            />
          </Link>
        </div>
      </div>
      <Link href="/about">
        <TextButton
          text="More About Us"
          variant="short"
          colorVariant="dark"
          classNames={[styles.company__btn]}
        />
      </Link>
    </Container>
  </section>
)

export default Company
