import Link from 'next/link'
import type { FC } from 'react'

import { Container } from '@/ui'
import { SectionTitle } from '@/ui'

import Arrow from '@assets/icons/arrow.svg'

import styles from './index.module.scss'

interface ICommitment {
  className?: string
}

const Commitment: FC<ICommitment> = ({ className }) => (
  <Container>
    <section className={`${styles.commitment} ${className}`}>
      <SectionTitle index="04">Our Commitment</SectionTitle>
      <div className={styles.content}>
        <p>
          At Insoftel, we make it our mission to help you explore and learn the
          best of digital transformation, whether it’s optimising operations,
          engaging customers, or redefining your brand&apos;s impact. We&apos;re
          here to turn your vision into reality
        </p>
        <Link href="/services">
          Explore Our Services <Arrow />
        </Link>
      </div>
    </section>
  </Container>
)

export default Commitment
