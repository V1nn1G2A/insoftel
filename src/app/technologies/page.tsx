import { Metadata } from 'next'

import { SectionsProvider } from '@/providers/ObserverProvider/contextProvider'
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
    <SectionsProvider>
      <main className="Technologies">
        <div data-section="technologiesHeading">
          <SectionHeading
            title="Technologies"
            letter="T"
          />
        </div>
        <div data-section="technologiesContent">
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
        </div>
      </main>
    </SectionsProvider>
  )
}
