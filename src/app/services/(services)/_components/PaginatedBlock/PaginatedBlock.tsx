import classNames from 'classnames/bind'
import React from 'react'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IPaginatedBlock {
  mainTitle: string
  headingText: string
  image: React.ReactNode
  paginatedInfo: React.ReactNode
}

const PaginatedBlock: React.FC<IPaginatedBlock> = ({
  mainTitle = 'IT Consulting & Business Solutions',
  headingText = 'dsd',
  image,
  paginatedInfo,
}) => (
  <div className={cx('paginated-block')}>
    <div className={cx('heading')}>
      <h2 className={cx('main-title')}>{mainTitle}</h2>
      <p className={cx('heading-text')}>{headingText}</p>
    </div>
    <div className={cx('paginated-content')}>
      {image}
      {paginatedInfo}
    </div>
  </div>
)

export default PaginatedBlock
