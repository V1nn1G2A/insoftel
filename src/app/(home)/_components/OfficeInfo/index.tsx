import type { FC } from 'react'

import { AnimationBlock } from '@/ui'

import styles from './index.module.scss'

interface IOfficeInfo {
  className?: string
}

const OfficeInfo: FC<IOfficeInfo> = ({ className }) => (
  <div className={`${styles.office} ${className}`}>
    <AnimationBlock type="p">
      With a strong focus on innovation and a commitment to excellence, we
      empower businesses and government organisations to thrive in an
      ever-evolving telecommunications landscape.
    </AnimationBlock>
    <AnimationBlock type="p">
      Our team of experts specialises in creating custom software tailored
      precisely to your unique requirements, helping you stay ahead in a
      competitive industry.
    </AnimationBlock>
    <div className={styles.office__contacts}>
      <AnimationBlock type="p">
        Dubai, UAE <br /> Istanbul, Turkey
      </AnimationBlock>
      <AnimationBlock type="p">
        [ Head Office ] <br /> [ Office ]
      </AnimationBlock>
    </div>
  </div>
)

export default OfficeInfo
