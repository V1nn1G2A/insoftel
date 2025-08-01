import type { FC } from 'react'

import { AnimationBlock } from '@/ui'

import styles from './index.module.scss'

const Slogan: FC = ({}) => (
  <AnimationBlock className={styles.wrapper}>
    <p className={styles.slogan}>
      We create custom software solutions{' '}
      <AnimationBlock
        type="span"
        amount={0.7}
      >
        tailored for businesses and{' '}
      </AnimationBlock>
      <AnimationBlock
        type="span"
        amount={0.7}
      >
        government entities
      </AnimationBlock>
    </p>
  </AnimationBlock>
)

export default Slogan
