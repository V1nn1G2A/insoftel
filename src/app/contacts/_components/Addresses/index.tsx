'use client'

import { AnimationBlock, TextButton } from '@/ui'

import { addresses } from '../../_constants/CONTACTS'
import AddressItem from '../AddresItem'
import { TelegramPopup } from '@/ui'

import styles from './index.module.scss'
import { usePopupDispatch } from '@/ui/Popup/PopupContext'

const Addresses = () => {
    const { openPopup } = usePopupDispatch();
  
    const handleOpenInfo = () => {
      openPopup(<TelegramPopup />);
    };

    return (
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
              onClick={handleOpenInfo}
              classNames={['button-contacts', 'text-contacts', 'desctop']}
              colorVariant="dark"
              text="Connect with Us on Telegram"
              variant="long"
            />
          </AnimationBlock>
          <AnimationBlock>
            <TextButton
              onClick={handleOpenInfo}
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
}

export default Addresses
