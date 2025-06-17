import type { FC } from 'react'

import { AnimationBlock, Container, SectionTitle } from '@/ui'

import styles from './index.module.scss'

const Expertise: FC = ({}) => (
  <Container>
    <section
      className={styles.expertise}
      id="Our Expertise"
    >
      <SectionTitle index="02">Our Expertise</SectionTitle>
      <AnimationBlock type="p">
        From AI-powered automation and predictive analytics to blockchain,
        mobile development, and hardware integration, our custom solutions cover
        a broad range of needs, ensuring every aspect of your brand’s digital
        journey is expertly crafted. Explore examples of our past work on our
        website to see how we’ve helped clients make a meaningful impact.
      </AnimationBlock>
    </section>
  </Container>
)

export default Expertise
