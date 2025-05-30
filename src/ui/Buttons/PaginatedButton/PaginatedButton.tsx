import ArrowIcon from '@/assets/icons/arrow.svg'

import classNames from 'classnames/bind'

import styles from './paginatedButton.module.scss'

const cx = classNames.bind(styles)

interface IExploreButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  orientation: 'left' | 'right'
}

const PaginatedButton: React.FC<IExploreButton> = ({ orientation }) => (
  <button className={cx('button')}>
    <ArrowIcon className={cx('arrow', orientation)} />
  </button>
)

export default PaginatedButton
