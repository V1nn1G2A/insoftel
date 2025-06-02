import classNames from 'classnames/bind'
import Image from 'next/image'

import { Container, SectionTitle, TextButton } from '@/ui'

import Paragraph from '../../../../ui/Paragraph'
import services from '../../_constants/SERVICE'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Services = () => {
  return (
    <Container>
      <section className={cx('services')}>
        <div className={cx('title-block')}>
          <SectionTitle index="01">Services</SectionTitle>
          <Image
            src="/img/services/1.png"
            alt="services-image"
            width={435}
            height={435}
          />
        </div>
        <div className={cx('info-block')}>
          <p className={cx('text-top')}>
            Our solutions are tailored to empower businesses, government
            entities, and startups with cutting-edge technologies that drive
            efficiency, innovation, and growth
          </p>
          <div className={cx('grid')}>
            {services.map(service => (
              <Paragraph
                key={service.title}
                title={service.title}
                lines={service.lines}
                className={[styles.paragraph]}
              />
            ))}
          </div>
          <TextButton
            text="Explore Our Services"
            variant="long"
            colorVariant="dark"
          />
        </div>
      </section>
    </Container>
  )
}

export default Services
