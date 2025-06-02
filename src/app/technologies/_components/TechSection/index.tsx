import { FC } from 'react'

import styles from './index.module.scss'

export interface ITechSection {
  title: string
  titleIndex: string
  mainText: string
  secondaryText: string
}

const TechSection: FC<ITechSection> = ({
  title,
  titleIndex,
  mainText,
  secondaryText,
}) => {
  return (
    <section className={styles.technologiesSection}>
      <h2 className={styles.technologiesSection__title}>
        <sup className={styles.technologiesSection__titleIndex}>
          [ {titleIndex} ]
        </sup>{' '}
        {title}
      </h2>
      <div className={styles.technologiesSection__content}>
        <p className={styles.technologiesSection__mainText}>{mainText}</p>
        <p className={styles.technologiesSection__secondaryText}>
          <span className={styles.technologiesSection__secondaryTextTitle}>
            Business Impact:
          </span>{' '}
          {secondaryText}
        </p>
      </div>
    </section>
  )
}

export default TechSection
