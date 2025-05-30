import Image from 'next/image'

import { ExploreButton } from '@/ui/Buttons/ExploreButton'

import FooterAddress from '../FooterAddress/FooterAddress'
import FooterNav from '../FooterNav/FooterNav'
import TelegramBlock from '../TelegramBlock/TelegramBlock'

import styles from './FooterInfo.module.scss'

const FooterInfo = () => (
  <div className={styles.footerInfo}>
    <FooterNav />
    <FooterAddress />
    <TelegramBlock />
    <Image
      src={'/img/footer/1.png'}
      width={207}
      height={207}
      alt="logo"
      className={styles.footerInfo__logo}
    />
    <div className={styles.footerInfo__button}>
      <ExploreButton
        text="Download Presentation"
        colorVariant="light"
        className={styles.button}
      />
    </div>
  </div>
)

export default FooterInfo
