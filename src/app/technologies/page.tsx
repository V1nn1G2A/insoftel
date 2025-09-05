import { Metadata } from 'next'

import { Container } from '@/ui'
import SectionHeading from '@/ui/SectionHeading'

import { technologiesContetnt } from './CONSTANTS'
import TechSection from './_components/TechSection'

import styles from './index.module.scss'

export const metadata: Metadata = {
  title: 'Insoftel Technologies - Technologies',
  description: 'Insoftel Technologies - Technologies',
}

export default function Technologies() {
  return (
    <main className="Technologies">
      <SectionHeading
        title="Technologies"
        letter="T"
      />
      <Container>
        <div className={styles.content}>
          {technologiesContetnt.map((item, index) => (
            <TechSection
              key={index}
              {...item}
              isLast={index === technologiesContetnt.length - 1}
              className={styles.techSection}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}
