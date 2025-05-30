import { TextButton } from '@/ui/Buttons/TextButton'
import { Container } from '@/ui/Container'

import classNames from 'classnames/bind'
import Image from 'next/image'

import { Paragraph } from '../_paragraph'

import styles from './services.module.scss'

const cx = classNames.bind(styles)

const Services = () => {
  return (
    <Container>
      <section className={cx('services')}>
        <div className={cx('title-block')}>
          <div className={cx('title-top')}>
            <span className={cx('number')}>[01]</span>
            <h2 className={cx('title')}>Services</h2>
          </div>
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
            {/* <Paragraph
            User-Centred UXProduct Design StrategyApp & Web DesignMotion & Communication DesignPrototyping and Testing
            QA TestingBranding & Communication Strategy
            Intelligent AutomationPredictive AnalyticsCustom AI SolutionsAI-Powered Personalisation
            Web & Mobile App DevelopmentCross-Platform ApplicationsBackend & Frontend DevelopmentEnterprise Software SolutionsBlockchain Applications
              title="Development"
              text="Web & Mobile App DevelopmentCross-Platform ApplicationsBackend & Frontend Development Enterprise Software Solutions Blockchain Applications"
            />
            <Paragraph
              title="UX/UI Design"
              text="User-Centred UX Product Design Strategy App & Web Design Motion & Communication Design Prototyping and Testing"
            />
            <Paragraph
              title="Artificial Intelligence"
              text="Intelligent Automation Predictive Analytics Custom AI Solutions AI-Powered Personalisation"
            />
            <Paragraph
              title="Quality & Branding"
              text="QA Testing Branding & Communication Strategy"
            /> */}
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
