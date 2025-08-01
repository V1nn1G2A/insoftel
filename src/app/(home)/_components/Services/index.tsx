'use client'

import classNames from 'classnames/bind'
import Link from 'next/link'

import Logo from '@/assets/icons/imageDark.svg'
import {
  AnimationBlock,
  Container,
  MotionSvg,
  SectionTitle,
  TextButton,
} from '@/ui'

import Paragraph from '../../../../ui/Paragraph'
import services from '../../_constants/SERVICE'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Services = () => {
  return (
    <Container className={cx('services-container')}>
      <section className={cx('services')}>
        <div className={cx('title-block')}>
          <SectionTitle
            index="01"
            className={styles.title}
          >
            Services
          </SectionTitle>
          <MotionSvg
            Svg={Logo}
            className={styles.logo}
            containerClassName={styles.logoContainer}
          />
        </div>
        <div className={cx('info-block')}>
          <AnimationBlock
            type="p"
            className={cx('text-top')}
          >
            Our solutions are tailored to empower businesses, government
            entities, and startups with cutting-edge technologies that drive
            efficiency, innovation, and growth
          </AnimationBlock>
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
          <AnimationBlock>
            <Link
              href="/services"
              className={styles.link}
            >
              <TextButton
                text="Explore Our Services"
                variant="long"
                colorVariant="dark"
                classNames={[styles.button, styles.buttonText, '', '']}
              />
            </Link>
          </AnimationBlock>
        </div>
      </section>
    </Container>
  )
}

export default Services
