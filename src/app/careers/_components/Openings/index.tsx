'use client'

import { AnimatedText, AnimationBlock, Container } from '@/ui'

import items from '../../constants/OPENING'
import Accordion from '../Accordion'

import styles from './index.module.scss'

const Openings = () => (
  <Container>
    <section className={styles.openings}>
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
      {items.map(el => (
        <Accordion
          title={el}
          onClick={() => {}}
          key={el}
        ></Accordion>
      ))}
    </section>
  </Container>
)

export default Openings
