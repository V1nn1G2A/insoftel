import ArrowIcon from '@/app/assets/icons/arrow.svg'

import styles from './TelegramBlock.module.scss'

const TelegramBlock = () => {
  return (
    <div className={styles.telegramBlock}>
      <button className={styles.button}>
        <span className={styles.button__text}>Connect with Us on Telegram</span>
        <div className={styles.button__wrapper}>
          <div className={styles.button__round}>
            <ArrowIcon className={styles.button__arrow} />
          </div>
        </div>
      </button>
      <p className={styles.text}>
        For direct communication, connect with us on Telegram. Clicking the link
        will redirect you to our Telegram chat
      </p>
    </div>
  )
}

export default TelegramBlock
