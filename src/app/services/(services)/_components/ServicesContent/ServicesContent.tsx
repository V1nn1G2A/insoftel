import { Container } from '@/ui/Container'

import classNames from 'classnames/bind'
import Image from 'next/image'

import BPage from '../BPage/BPage'
import PaginatedBlock from '../PaginatedBlock/PaginatedBlock'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const ServicesContent = () => (
  <Container>
    <section className={cx('services-content')}>
      <PaginatedBlock
        mainTitle="IT Consulting & Business Solutions"
        headingText="Strategically align your IT infrastructure with your business goals to drive sustainable growth and future-proof your operations"
        image={
          <Image
            className={cx('letter')}
            src={'/img/services/B.png'}
            width={144}
            height={179}
            alt="B"
          />
        }
        paginatedInfo={<BPage />}
      />
    </section>
  </Container>
)

export default ServicesContent
