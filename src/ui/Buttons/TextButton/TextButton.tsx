import ArrowIcon from '@/assets/icons/arrow.svg'

import classNames from 'classnames/bind'

import styles from './textButton.module.scss'

const cx = classNames.bind(styles)

interface IExploreButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant: 'short' | 'long'
  colorVariant?: 'light' | 'dark'
}

const TextButton: React.FC<IExploreButton> = ({
  text = 'More About Us',
  colorVariant = 'light',
  variant = 'short',
}) => (
  <button className={cx('button', variant, colorVariant)}>
    <p className={cx('text', variant, colorVariant)}>{text}</p>
    <div className={cx('round', variant, colorVariant)}>
      <ArrowIcon className={cx('arrow', variant, colorVariant)} />
    </div>
  </button>
)

export default TextButton
