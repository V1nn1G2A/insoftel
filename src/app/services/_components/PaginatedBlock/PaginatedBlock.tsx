'use client'

import classNames from 'classnames/bind'

import { BigLetter, TelegramPopup, TextButton } from '@/ui'
import { usePopupDispatch } from '@/ui/Popup/PopupContext'

import { IPaginatedInfo } from '../../model/IPagintedInfo'
import { Header } from '../Header'
import { ParagraphsList } from '../ParagraphsList'
import { ScrolBlock } from '../ScrollBlock'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IPaginatedBlock {
  mainTitle: string
  headingText: string
  letter: string
  paginatedInfo: IPaginatedInfo[]
  id: string
  className?: string
  letterClassName?: string
  headerClassName?: string
  contectClassName?: string
  buttonClassName?: string
  buttonWrapperClassName?: string
}

const PaginatedBlock: React.FC<IPaginatedBlock> = ({
  mainTitle = 'IT Consulting & Business Solutions',
  headingText = 'dsd',
  letter,
  paginatedInfo,
  id,
  className,
  letterClassName,
  headerClassName,
  contectClassName,
  buttonClassName,
  buttonWrapperClassName,
}) => {
  const { openPopup } = usePopupDispatch()

  const handleOpenInfo = () => {
    openPopup(<TelegramPopup />)
  }

  return (
    <div
      className={cx('paginated-block', className)}
      id={id}
    >
      <div className={cx('center')}>
        <Header
          className={cx('heading', headerClassName)}
          title={mainTitle}
          text={headingText}
        />
        <div className={cx('contentWrapper')}>
          <BigLetter
            className={cx('letter', letterClassName)}
            isAnimated={false}
          >
            {letter}
          </BigLetter>
          <div className={cx('content', contectClassName)}>
            <ParagraphsList
              paragraphs={paginatedInfo}
              className={cx('paragraphDesk')}
            />
            <ScrolBlock
              paragraphs={paginatedInfo}
              className={cx('paragraphMobile', 'mySwiperWrapper')}
              paragraphClassName={cx('paragraphContent')}
            />
            <div className={cx('button', buttonWrapperClassName)}>
              <TextButton
                onClick={handleOpenInfo}
                text="Connect with Us"
                variant="long"
                colorVariant="dark"
                classNames={[cx(buttonClassName)]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaginatedBlock
