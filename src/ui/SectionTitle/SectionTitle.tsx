import cn from 'classnames'
import type { FC } from 'react'

import styles from './sectionTitle.module.scss'

interface ISectionTitle {
  className?: string
  text: string
  index: string
  theme?: 'light' | 'dark'
}

const cx = cn.bind(styles)

const SectionTitle: FC<ISectionTitle> = ({
  className,
  text,
  index,
  theme = 'light',
}) => {
  const classNames = cx(styles.header, styles[`header--${theme}`], className)

  return (
    <div className={classNames}>
      <sup className={styles.index}>[ {index} ]</sup>
      <h2 className={styles.text}>{text}</h2>
    </div>
  )
}

export default SectionTitle
