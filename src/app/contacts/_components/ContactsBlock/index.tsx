import Addresses from '../Addresses'

import styles from './index.module.scss'

const ContactsBlock = () => (
  <div className={styles.contactsBlock}>
    <Addresses />
    <div className={styles.letters}>
      <span className={styles.i}>I</span>
      <span className={styles.t}>T</span>
    </div>
  </div>
)

export default ContactsBlock
