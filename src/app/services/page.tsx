import classNames from 'classnames/bind'

import { Container } from '@/ui'
import SectionHeading from '@/ui/SectionHeading'

import { PaginatedContainer } from './_components/PaginatedContainer'

import styles from './index.module.scss'

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
