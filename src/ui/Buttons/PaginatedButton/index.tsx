import classNames from 'classnames/bind'

import ArrowIcon from '@/assets/icons/arrow.svg'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IExploreButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  orientation: 'left' | 'right'
  className?: string
}

const PaginatedButton: React.FC<IExploreButton> = ({
  orientation,
  className,
  ...rest
}) => (
  <button
    className={cx('button', className)}
    {...rest}
  >
    <ArrowIcon className={cx('arrow', orientation)} />
  </button>
)

export default PaginatedButton
