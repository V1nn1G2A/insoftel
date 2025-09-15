import cn from 'classnames/bind'
import { type FC } from 'react'

import { servicesPagination } from '../../_constants/SERVICES'
import PaginatedBlock from '../PaginatedBlock/PaginatedBlock'

import styles from './index.module.scss'

interface IPaginatedContainer {
  className?: string
}

const cx = cn.bind(styles)

export const PaginatedContainer: FC<IPaginatedContainer> = ({ className }) => (
  <section className={cx('container', className)}>
    {servicesPagination.map(page => (
      <div
        className={cx('content', page.letter)}
        key={page.letter}
      >
        <div data-section={`${page.letter}`}>
          <PaginatedBlock
            id={page.id}
            mainTitle={page.mainTitle}
            headingText={page.headingText}
            letter={page.letter}
            paginatedInfo={page.paginatedInfo}
            className={cx('block')}
            letterClassName={cx('letter')}
            headerClassName={cx('sectionHeader')}
            contectClassName={cx('paginationContent')}
            buttonClassName={cx('paginationButton')}
            buttonWrapperClassName={cx('paginationButtonWrapper')}
          />
        </div>
      </div>
    ))}
  </section>
)
