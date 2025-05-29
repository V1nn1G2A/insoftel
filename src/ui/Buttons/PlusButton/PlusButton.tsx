import classNames from 'classnames/bind'

import PlusIcon from '@/app/assets/icons/plus.svg'

import styles from './plusButton.module.scss'

const cx = classNames.bind(styles)

const PlusButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = () => (
  <button className={cx('button')}>
    <PlusIcon className={cx('plus')} />
  </button>
)

export default PlusButton
