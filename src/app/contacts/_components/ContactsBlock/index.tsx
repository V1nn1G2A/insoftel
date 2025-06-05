import { BigLetter } from '@/ui'

import Addresses from '../Addresses'

import styles from './index.module.scss'

const ContactsBlock = () => (
  <div className={styles.contactsBlock}>
    <Addresses />
    <div className={styles.letters}>
      <BigLetter className={styles.i}>I</BigLetter>
      <BigLetter className={styles.t}>T</BigLetter>
    </div>
  </div>
)

export default ContactsBlock
