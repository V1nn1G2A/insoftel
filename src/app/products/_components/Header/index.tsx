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
    <div className={`${styles.header} ${className}`}>
      <Container>
        <div className={styles.header__title}>
          <p>
            <AnimatedText height={92}>Our Products</AnimatedText>
          </p>
        </div>
        <p className={styles.header__content}>
          Discover innovative solutions that redefine smart living, industrial
          automation, financial management, and creative content distribution.
          With advanced technologies, our products are designed to deliver
          real-world impact, making everyday challenges simpler and more
          efficient.
        </p>
        <ExploreButton
          colorVariant="dark"
          text="Unpack the Solutions"
          classNames={['', '', styles.explore]}
        />
        <div className={styles.header__back}>
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
