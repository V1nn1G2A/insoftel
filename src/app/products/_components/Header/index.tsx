import type { FC } from 'react'

import { BigLetter } from '@/ui'
import { Container } from '@/ui'
import { AnimatedText, AnimationBlock, ExploreButton } from '@/ui'

import styles from './index.module.scss'

interface IHeader {
  className?: string
}

const Header: FC<IHeader> = ({ className }) => {
  return (
    <Container>
      <div className={`${styles.header} ${className}`}>
        <div className={styles.header__main}>
          <h2 className={styles.header__title}>
            <AnimatedText height={50}>Our Products</AnimatedText>
          </h2>
          <div className={styles.header__contentWrapper}>
            <AnimationBlock
              type="p"
              className={styles.header__content}
            >
              Discover innovative solutions that redefine smart living,
              industrial automation, financial management, and creative content
              distribution. With advanced technologies, our products are
              designed to deliver real-world impact, making everyday challenges
              simpler and more efficient.
            </AnimationBlock>
            <ExploreButton
              colorVariant="dark"
              text="Explore"
              classNames={['', '', styles.explore]}
            />
          </div>
        </div>
        <div className={styles.header__back}>
          <BigLetter>S</BigLetter>
          <BigLetter>T</BigLetter>
        </div>
      </div>
    </Container>
  )
}

export default Header
