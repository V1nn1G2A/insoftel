import type { FC } from 'react';



import { Quote } from '@/ui';
import { Container } from '@/ui';



import styles from './index.module.scss';





const QuoteSection: FC = ({}) => (
  <Container>
    <Quote
      author="Founder of Insoftel Technologies"
      className={styles.quote}
      id="AboutQuote"
    >
      At Insoftel, custom software is just the beginning. By combining deep
      software expertise with hardware integration, we create adaptable,
      high-impact solutions that empower clients to lead with confidence and
      innovation
    </Quote>
  </Container>
)
export default QuoteSection