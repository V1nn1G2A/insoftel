import classNames from 'classnames/bind'

import ArrowIcon from '@/assets/icons/arrow.svg'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IExploreButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant: 'short' | 'long'
  colorVariant?: 'light' | 'dark'
  classNames?: string[]
}

const TextButton: React.FC<IExploreButton> = ({
  text = 'More About Us',
  colorVariant = 'light',
  variant = 'short',
  classNames,
}) => {
  const [contactsButton, contactsText, size] = classNames ?? []
  return (
    <button
      className={cx('button', variant, colorVariant, contactsButton, size)}
    >
      <p className={cx('text', variant, colorVariant, contactsText)}>{text}</p>
      <div className={cx('round', variant, colorVariant)}>
        <ArrowIcon className={cx('arrow', variant, colorVariant)} />
      </div>
    </button>
  )
}
export default TextButton
