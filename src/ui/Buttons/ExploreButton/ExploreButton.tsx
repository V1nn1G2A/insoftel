import ArrowIcon from '@/assets/icons/arrow.svg'

import classNames from 'classnames/bind'

import styles from './exploreButton.module.scss'

const cx = classNames.bind(styles)

interface IExploreButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  colorVariant?: 'light' | 'dark'
  buttonClassName?: string
}

const ExploreButton: React.FC<IExploreButton> = ({
  text = 'Explore',
  colorVariant = 'light',
  buttonClassName,
}) => (
  <button className={cx('button', colorVariant, buttonClassName)}>
    <p className={cx('text', colorVariant)}>{text}</p>
    <div className={cx('round', colorVariant)}>
      <ArrowIcon className={cx('arrow', colorVariant)} />
    </div>
  </button>
)

export default ExploreButton
