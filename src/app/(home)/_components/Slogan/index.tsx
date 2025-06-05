import type { FC } from 'react'

import { AnimationBlock } from '@/ui'

import styles from './index.module.scss'

const Slogan: FC = ({}) => (
  <AnimationBlock>
    <p className={styles.slogan}>
      We create custom software solutions{' '}
      <AnimationBlock type="span">tailored for businesses and </AnimationBlock>
      <AnimationBlock type="span">government entities</AnimationBlock>
    </p>
  </AnimationBlock>
)

export default Slogan
