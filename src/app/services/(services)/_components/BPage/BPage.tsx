import classNames from 'classnames/bind'

import { TextButton } from '@/ui'
import Paragraph from '@/ui/Paragraph'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const BPage = () => (
  <div className={cx('paginated-info')}>
    <div className={cx('paragraph-list')}>
      <Paragraph
        title="Technology Strategy & Roadmaps:"
        lines={[
          'Develop clear, actionable plans that outline your technology goals, ensuring alignment with your broader business objectives.',
        ]}
        className={['pagination-block', 'paginated-title', '540px']}
      />
      <Paragraph
        title="Infrastructure Design:"
        lines={[
          'Build a secure, scalable, and resilient IT foundation that supports your organisation’s growth and adaptability.',
        ]}
        className={['pagination-block', 'paginated-title', '540px']}
      />
      <Paragraph
        title="Cloud Solutions & DevOps Integration:"
        lines={[
          'Enhance efficiency and scalability with cloud infrastructure, while DevOps practices streamline development cycles and deployment.',
        ]}
        className={['pagination-block', 'paginated-title']}
      />
      <Paragraph
        title="Digital Transformation Guidance:"
        lines={[
          'Navigate your digital journey with expert advice, ensuring each step is aligned with your vision and maximises return on investment.',
        ]}
        className={['pagination-block', 'paginated-title']}
      />
    </div>
    <TextButton
      text="Connect with Us"
      variant="long"
      colorVariant="dark"
    />
  </div>
)

export default BPage
