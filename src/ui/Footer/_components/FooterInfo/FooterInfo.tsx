import FooterAddress from '../FooterAddress/FooterAddress'
import FooterNav from '../FooterNav/FooterNav'
import TelegramBlock from '../TelegramBlock/TelegramBlock'

import styles from './FooterInfo.module.scss'

const FooterInfo = () => (
  <div className={styles.footerInfo}>
    <FooterNav />
    <FooterAddress />
    <TelegramBlock />
  </div>
)

export default FooterInfo
