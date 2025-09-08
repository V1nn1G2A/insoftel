import { AnimationBlock } from '@/ui'

import styles from './index.module.scss'

const Copyright = () => {
  return (
    <AnimationBlock className={styles.copyright}>
      <p className={styles.copyright__text}>
        ©Copyright 2025 Insoftel Technologies L.L.C
      </p>
      <p className={styles.copyright__text}>
        Main Commercial License No.1171121
      </p>
    </AnimationBlock>
  )
}

export default Copyright
