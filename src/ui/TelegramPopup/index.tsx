'use client'

import Link from 'next/link'

import { TextButton } from '../Buttons'
import { usePopupDispatch } from '../Popup/PopupContext'

import styles from './index.module.scss'

const TelegramPopup = () => {
  const { closePopup } = usePopupDispatch()

  return (
    <div className={styles.popup__content}>
      <p className={styles.popup__text}>
        By clicking &quot;Confirm&quot;, you will be redirected to an Telegram
        chat
      </p>
      <div className={styles.popup__buttons}>
        <button
          className={styles.popup__cancel}
          onClick={closePopup}
        >
          Cancel
        </button>
        <Link
          href="https://t.me/insofteltechnologies"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TextButton
            text="Confirm"
            variant="short"
            colorVariant="dark"
            classNames={['', styles.popup__confirm, '']}
          />
        </Link>
      </div>
    </div>
  )
}
export default TelegramPopup
