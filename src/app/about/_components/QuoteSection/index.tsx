import type { FC } from 'react'

import { Quote } from '@/ui'
import { Container } from '@/ui'

import styles from './index.module.scss'

const QuoteSection: FC = ({}) => (
  <Container>
    <Quote
      author="Founder of Insoftel Technologies"
      className={styles.quote}
      wrapperClassName={styles.quote__wrapper}
      contentClassName={styles.quote__content}
      authorClassName={styles.quote__author}
      id="AboutQuote"
    >
      At Insoftel Technologies, custom software is just the beginning. By
      combining deep software expertise with hardware integration, we create
      adaptable, high-impact solutions that empower clients to lead with
      confidence and innovation
    </Quote>
  </Container>
)
export default QuoteSection
