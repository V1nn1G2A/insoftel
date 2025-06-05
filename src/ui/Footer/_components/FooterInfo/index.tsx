'use client'

import { ExploreButton } from '@/ui'
import { AnimationBlock } from '@/ui'
import { MotionImage } from '@/ui'

import FooterAddress from '../FooterAddress'
import FooterNav from '../FooterNav'
import TelegramBlock from '../TelegramBlock'

import styles from './index.module.scss'

const FooterInfo = () => (
  <div className={styles.footerInfo}>
    <FooterNav />
    <FooterAddress />
    <TelegramBlock />
    <MotionImage
      src={'/img/footer/1.png'}
      width={207}
      height={207}
      alt="logo"
      className={styles.footerInfo__logo}
    />
    <AnimationBlock className={styles.footerInfo__button}>
      <ExploreButton
        text="Download Presentation"
        colorVariant="light"
        className={styles.button}
      />
    </AnimationBlock>
  </div>
)

export default FooterInfo
