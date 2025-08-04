import type { FC } from 'react'

import { AnimationBlock } from '@/ui'

import styles from './index.module.scss'

const Slogan: FC = ({}) => (
  <div className={styles.wrapper}>
    <p className={styles.slogan}>
      <AnimationBlock type="span">
        We create custom software solutions{' '}
      </AnimationBlock>
      <AnimationBlock type="span">tailored for businesses and </AnimationBlock>
      <AnimationBlock type="span">government entities</AnimationBlock>
    </p>
  </div>
)

export default Slogan
