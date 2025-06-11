import { TextButton } from '../Buttons'
import { usePopup } from '../Popup/PopupContext'

import styles from './index.module.scss'

interface IFormPopup {
  isConfirm: boolean
  onClick?: () => void
}

const FormPopup: React.FC<IFormPopup> = ({ isConfirm, onClick }) => {
  const { closePopup } = usePopup()

  const handleClick = () => {
    closePopup()
    onClick?.()
  }

  if (isConfirm) {
    return (
      <div className={styles.popup__content}>
        <p className={styles.popup__text}>Thank you for your application</p>
        <div className={styles.popup__buttons}>
          <TextButton
            text="Ok"
            variant="short"
            colorVariant="dark"
            onClick={handleClick}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.popup__content}>
        <p className={styles.popup__text}>
          Please fill in all fields before sending
        </p>
        <div className={styles.popup__buttons}>
          <TextButton
            text="Confirm"
            variant="short"
            colorVariant="dark"
            onClick={closePopup}
          />
        </div>
      </div>
    )
  }
}

export default FormPopup
