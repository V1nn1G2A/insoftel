'use client'

import cn from 'classnames/bind'

import { AnimationBlock, TextButton } from '@/ui'
import { TelegramPopup } from '@/ui'
import { usePopupDispatch } from '@/ui/Popup/PopupContext'

import { addresses } from '../../_constants/CONTACTS'
import AddressItem from '../AddresItem'

import styles from './index.module.scss'

const cx = cn.bind(styles)

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
              classNames={[
                cx('button-contacts'),
                cx('text-contacts'),
                cx('desctop'),
              ]}
              colorVariant="dark"
              text="Connect with Us on Telegram"
              variant="long"
            />
          </AnimationBlock>
          <AnimationBlock>
            <TextButton
              onClick={handleOpenInfo}
              classNames={[
                cx('button-contacts'),
                cx('text-contacts'),
                cx('mobile'),
              ]}
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
