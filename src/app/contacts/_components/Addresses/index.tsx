'use client'

import { AnimationBlock, TextButton } from '@/ui'
import { TelegramPopup } from '@/ui'
import { usePopupDispatch } from '@/ui/Popup/PopupContext'

import { addresses } from '../../_constants/CONTACTS'
import AddressItem from '../AddresItem'

import styles from './index.module.scss'

const Addresses = () => {
  const { openPopup } = usePopupDispatch()

  const handleOpenInfo = () => {
    openPopup(<TelegramPopup />)
  }

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
              classNames={['button-contacts', '', 'desctop']}
              colorVariant="dark"
              text="Connect with Us on Telegram"
              variant="long"
            />
          </AnimationBlock>
          <AnimationBlock>
            <TextButton
              onClick={handleOpenInfo}
              classNames={['button-contacts', '', 'mobile']}
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
