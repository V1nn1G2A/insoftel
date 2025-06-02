import classNames from 'classnames/bind'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className={cx('container')}>{children}</div>
)

export default Container
