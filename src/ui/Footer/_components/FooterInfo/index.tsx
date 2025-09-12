'use client'

import Logo from '@/assets/icons/logo_footer.svg'
import { AnimationBlock, ExploreButton, MotionSvg } from '@/ui'

import FooterAddress from '../FooterAddress'
import FooterNav from '../FooterNav'
import TelegramBlock from '../TelegramBlock'

import styles from './index.module.scss'

const FooterInfo = () => (
  <div className={styles.footerInfo}>
    <FooterNav />
    <FooterAddress />
    <TelegramBlock />
    <MotionSvg
      Svg={Logo}
      className={styles.footerInfo__logo}
      containerClassName={styles.footerInfo__logoContainer}
    />
    <AnimationBlock className={styles.footerInfo__button}>
      <a
        href="/files/InsoftelTechnologies.pdf"
        download="InsoftelTechnologies.pdf"
        className={styles.link}
      >
        <ExploreButton
          text="Download Presentation"
          colorVariant="light"
          classNames={['', '', styles.button]}
        />
      </a>
    </AnimationBlock>
  </div>
)

export default FooterInfo
