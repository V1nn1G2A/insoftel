import { AnimatedText, AnimationBlock, Container } from '@/ui'

import styles from './index.module.scss'

const Header = () => (
  <Container>
    <section className={styles.header}>
      <h2 className={styles.title}>
        <AnimatedText>Join Our Team</AnimatedText>
      </h2>
      <AnimationBlock
        type="p"
        className={styles.content}
      >
        At Insoftel Technologies, we’re seeking talented professionals to drive
        innovation with us. If you’re passionate about technology and eager to
        work on impactful projects, explore our open roles
      </AnimationBlock>
    </section>
  </Container>
)

export default Header
