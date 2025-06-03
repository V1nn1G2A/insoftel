import type { FC } from 'react'

import { BigLetter } from '@/ui'
import { Container } from '@/ui'
import { ExploreButton } from '@/ui/Buttons'

import styles from './index.module.scss'

interface ISlogan {
  className?: string
}

const Slogan: FC<ISlogan> = ({ className }) => (
  <div className={`${styles.slogan} ${className}`}>
    <Container>
      <div className={styles.slogan__text}>
        <p>Insoftel Technologies –</p>
        <p>Your Vision, Our Code</p>
      </div>
      <ExploreButton
        colorVariant="dark"
        text="Unpack the Solutions"
        className={styles.explore}
      />
      <div className={styles.slogan__back}>
        <BigLetter>S</BigLetter>
        <ExploreButton
          colorVariant="dark"
          text="Unpack the Solutions"
          className={styles.explores}
        />
        <BigLetter>T</BigLetter>
      </div>
    </Container>
  </div>
)

export default Slogan
