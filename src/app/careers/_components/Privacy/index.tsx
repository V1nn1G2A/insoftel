import Cross from '@/assets/icons/cross.svg'
import { usePopupDispatch } from '@/ui/Popup/PopupContext'

import styles from './index.module.scss'

const Privacy = () => {
  const { closePopup } = usePopupDispatch()

  return (
    <div className={styles.privacy}>
      <button
        type="button"
        className={styles.cross}
        onClick={closePopup}
      >
        <Cross />
      </button>

      <h2 className={styles.title}>Privacy Policy</h2>
      <p className={styles.text}>
        Insoftel Technologies is committed to protecting your privacy and
        ensuring the security of your personal information. This Privacy Policy
        outlines how we collect, use, and safeguard your data when you visit our
        website.
      </p>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.item__title}>1. Information Collection</p>
          <p className={styles.item__text}>
            We may collect certain personal information, such as your name,
            email address, and any other information you voluntarily provide to
            us. This information is collected for the purposes of processing
            your application and responding to your inquiries.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy
