import { AnimationBlock, TextButton } from '@/ui'

import { addresses } from '../../_constants/CONTACTS'
import AddressItem from '../AddresItem'

import styles from './index.module.scss'

const Addresses = () => (
  <>
    <div className={styles.addresses}>
      <div className={styles.addressesList}>
        {addresses.map(address => (
          <AddressItem
            key={address.title}
            title={address.title}
            address={address.text}
          />
        ))}
        <AnimationBlock>
          <TextButton
            classNames={['button-contacts', 'text-contacts', 'desctop']}
            colorVariant="dark"
            text="Connect with Us on Telegram"
            variant="long"
          />
        </AnimationBlock>
        <AnimationBlock>
          <TextButton
            classNames={['button-contacts', 'text-contacts', 'mobile']}
            colorVariant="dark"
            text="Connect with Us"
            variant="long"
          />
        </AnimationBlock>
      </div>
    </div>
  </>
)

export default Addresses
