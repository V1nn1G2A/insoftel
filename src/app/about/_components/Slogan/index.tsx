import type { FC } from 'react'

import { BigLetter } from '@/ui'
import { Container } from '@/ui'
import { AnimatedText, ExploreButton } from '@/ui'

import styles from './index.module.scss'

interface ISlogan {
  className?: string
}

const Slogan: FC<ISlogan> = ({ className }) => {
  return (
    <div className={`${styles.slogan} ${className}`}>
      <Container>
        <div className={styles.slogan__text}>
          <p>
            <AnimatedText height={92}>Insoftel Technologies –</AnimatedText>
          </p>
          <p>
            <AnimatedText height={92}>Your Vision, Our Code</AnimatedText>
          </p>
        </div>
        <ExploreButton
          colorVariant="dark"
          text="Unpack the Solutions"
          classNames={['', '', styles.explore]}
        />
        <div className={styles.slogan__back}>
          <BigLetter>S</BigLetter>
          <ExploreButton
            colorVariant="dark"
            text="Unpack the Solutions"
            classNames={['', '', styles.explores]}
          />
          <BigLetter>T</BigLetter>
        </div>
      </Container>
    </div>
  )
}

export default Slogan
