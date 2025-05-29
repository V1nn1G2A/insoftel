import FooterAddress from '../FooterAddress/FooterAddress'
import FooterNav from '../FooterNav/FooterNav'

import styles from './FooterInfo.module.scss'

const FooterInfo = () => (
  <div className={styles.footerInfo}>
    <FooterNav />
    <FooterAddress />
  </div>
)

export default FooterInfo
