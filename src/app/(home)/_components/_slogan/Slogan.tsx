import type { FC } from 'react'

import styles from './Slogan.module.scss'

const Slogan: FC = ({}) => (
  <p className={styles.slogan}>
    We create custom software solutions{' '}
    <span>tailored for businesses and </span>
    <span>government entities</span>
  </p>
)

export default Slogan
