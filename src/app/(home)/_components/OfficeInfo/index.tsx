import type { FC } from 'react'

import styles from './index.module.scss'

interface IOfficeInfo {
  className?: string
}

const OfficeInfo: FC<IOfficeInfo> = ({ className }) => (
  <div className={`${styles.office} ${className}`}>
    <p>
      With a strong focus on innovation and a commitment to excellence, we
      empower businesses and government organisations to thrive in an
      ever-evolving telecommunications landscape.
    </p>
    <p>
      Our team of experts specialises in creating custom software tailored
      precisely to your unique requirements, helping you stay ahead in a
      competitive industry.
    </p>
    <div className={styles.office__contacts}>
      <p>
        Dubai, UAE <br /> Instanbul, Turkey
      </p>
      <p>
        [ Head Office ] <br /> [ Office ]
      </p>
    </div>
  </div>
)

export default OfficeInfo
