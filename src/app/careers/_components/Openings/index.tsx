import { AnimatedText, AnimationBlock, Container } from '@/ui'

import AccordionsList from '../AccordionsList'

import styles from './index.module.scss'

const Openings = () => (
  <Container>
    <section
      className={styles.openings}
      id="Current Openings"
    >
      <h2 className={styles.title}>
        <AnimatedText height={50}>Current Openings</AnimatedText>
      </h2>
      <AnimationBlock
        type="p"
        className={styles.text}
      >
        Discover opportunities across development, design, project management,
        and consulting. <br /> Each role offers the chance to work with a
        skilled, supportive team on advanced software solutions
      </AnimationBlock>
      <AccordionsList />
    </section>
  </Container>
)

export default Openings
