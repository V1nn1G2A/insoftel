import type { FC } from 'react'

import { TextButton } from '@/ui/Buttons/TextButton'
import { Container } from '@/ui/Container'
import { Quote } from '@/ui/Quote'
import { SectionTitle } from '@/ui/SectionTitle'
import { StatsNumber } from '@/ui/StatsNumber'

import { OfficeInfo } from '../_officeInfo'
import Slogan from '../_slogan/Slogan'

import styles from './Company.module.scss'

const Company: FC = ({}) => (
  <section className={styles.company}>
    <Container>
      <div className={styles.company__header}>
        <SectionTitle
          index="03"
          className={styles.company__title}
        >
          Company
        </SectionTitle>
        <Slogan />
      </div>
      <Quote author="Founder of Insoftel Technologies">
        At Insoftel, custom software is just the beginning. By combining deep
        software expertise with hardware integration, we create adaptable,
        high-impact solutions that empower clients to lead with confidence and
        innovation
      </Quote>
      <div className={styles.company__info}>
        <OfficeInfo className={styles.company__office} />
        <div>
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
          <TextButton
            text="More About Us"
            variant="short"
            colorVariant="dark"
            className={styles.company__btn}
          />
        </div>
      </div>
      <TextButton
        text="More About Us"
        variant="short"
        colorVariant="dark"
      />
    </Container>
  </section>
)

export default Company
