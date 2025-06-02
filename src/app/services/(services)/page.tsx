import classNames from 'classnames/bind'
import Image from 'next/image'

import { Container } from '@/ui'

import { BPage } from './_components'
import { PaginatedBlock } from './_components'
import { servicesPagination } from './_constants/SERVICES'

// прописать логигу отобрпажения пагинации

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Services = () => {
  return (
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
}

export default Services
