import classNames from 'classnames/bind'
import { Metadata } from 'next'

import { SectionsProvider } from '@/providers/ObserverProvider/contextProvider'
import { Container } from '@/ui'
import SectionHeading from '@/ui/SectionHeading'

import { PaginatedContainer } from './_components/PaginatedContainer'

import styles from './index.module.scss'

export const metadata: Metadata = {
  title: 'Insoftel Technologies - Services',
  description: 'Insoftel Technologies - Services',
}

const cx = classNames.bind(styles)

const Services = () => (
  <SectionsProvider>
    <div data-section="servicesHeading">
      <SectionHeading
        title="Services"
        letter="S"
      />
    </div>
    <Container className={cx('services-wrapper')}>
      <div data-section="servicesBlock">
        <section className={cx('services-content')}>
          <PaginatedContainer />
        </section>
      </div>
    </Container>
  </SectionsProvider>
)

export default Services
