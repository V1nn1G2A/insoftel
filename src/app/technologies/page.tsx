import { Container } from '@/ui'

import { technologiesContetnt } from './CONSTANTS'
import TechSection from './_components/TechSection'

import styles from './index.module.scss'

export default function Technologies() {
  return (
    <main className="technologies">
      <Container>
        <div className={styles.content}>
          {technologiesContetnt.map((item, index) => (
            <TechSection
              key={index}
              {...item}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}
