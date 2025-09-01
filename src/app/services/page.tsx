import classNames from 'classnames/bind'
import { Metadata } from 'next'

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
  <>
    <SectionHeading
      title="Services"
      letter="S"
    />
    <Container className={cx('services-wrapper')}>
      <section className={cx('services-content')}>
        <PaginatedContainer />
      </section>
    </Container>
  </>
)

export default Services
