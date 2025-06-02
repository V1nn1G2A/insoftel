import classNames from 'classnames/bind'

import ArrowIcon from '@/assets/icons/arrow.svg'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IExploreButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  colorVariant?: 'light' | 'dark'
  className?: string
}

const ExploreButton: React.FC<IExploreButton> = ({
  text = 'Explore',
  colorVariant = 'light',
  className,
}) => (
  <button className={cx('button', colorVariant, className)}>
    <p className={cx('text', colorVariant)}>{text}</p>
    <div className={cx('round', colorVariant)}>
      <ArrowIcon className={cx('arrow', colorVariant)} />
    </div>
  </button>
)

export default ExploreButton
