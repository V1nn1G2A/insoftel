import classNames from 'classnames/bind'

import PlusIcon from '@assets/icons/plus.svg'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const PlusButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...rest
}) => (
  <button
    className={cx('button')}
    {...rest}
  >
    <PlusIcon className={cx('plus')} />
  </button>
)

export default PlusButton
