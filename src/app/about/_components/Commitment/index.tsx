import Link from 'next/link'
import type { FC } from 'react'

import { AnimationBlock, Container, SectionTitle, TextButton } from '@/ui'

import styles from './index.module.scss'

interface ICommitment {
  className?: string
}

const Commitment: FC<ICommitment> = ({ className }) => (
  <Container>
    <section className={`${styles.commitment} ${className}`}>
      <SectionTitle
        index="04"
        textClassName={styles.title}
      >
        Our Commitment
      </SectionTitle>
      <div className={styles.content}>
        <AnimationBlock type="p">
          At Insoftel Technologies, we make it our mission to help you explore
          and learn the best of digital transformation, whether it’s optimising
          operations, engaging customers, or redefining your brand&apos;s
          impact. We&apos;re here to turn your vision into reality
        </AnimationBlock>
        <AnimationBlock>
          <Link
            href="/services"
            className={styles.link}
          >
            <TextButton
              text="Explore Our Services"
              colorVariant="dark"
              variant="long"
              classNames={['', '', styles.button]}
            />
          </Link>
        </AnimationBlock>
      </div>
    </section>
  </Container>
)

export default Commitment
