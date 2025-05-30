import classNames from 'classnames/bind'
import Image from 'next/image'

import { TextButton } from '@/ui/Buttons/TextButton'
import { Container } from '@/ui/Container'
import { Paragraph } from '@/ui/Paragraph'
import { SectionTitle } from '@/ui/SectionTitle'

import styles from './services.module.scss'

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
            <Paragraph
              title="IT Consulting"
              lines={[
                'Technology Strategy & Roadmaps',
                'Infrastructure Design',
                'Cloud & DevOps Solutions',
                'Digital Transformation Guidance',
              ]}
            />
            <Paragraph
              title="Development"
              lines={[
                'Web & Mobile App Development',
                'Cross-Platform Applications',
                'Backend & Frontend Development',
                'Enterprise Software Solutions',
                'Blockchain Applications',
              ]}
            />
            <Paragraph
              title="UX/UI Design"
              lines={[
                'User-Centred UX',
                'Product Design Strategy',
                'App & Web Design',
                'Motion & Communication Design',
                'Prototyping and Testing',
              ]}
            />
            <Paragraph
              title="Artificial Intelligence"
              lines={[
                'Intelligent Automation',
                'Predictive Analytics',
                'Custom AI Solutions',
                'AI-Powered Personalisation',
              ]}
            />
            <Paragraph
              title="Quality & Branding"
              lines={['QA Testing', 'Branding & Communication Strategy']}
            />
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
