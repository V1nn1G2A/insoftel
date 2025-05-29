import classNames from 'classnames/bind'

import styles from './exploreButton.module.scss'

const cx = classNames.bind(styles)

interface IParagraph {
  title: string
  text: string
}

const Paragraph: React.FC<IParagraph> = ({ title, text }) => (
  <div className={cx('paragraph')}>
    <h3 className={cx('title')}>{title}</h3>
    <p className={cx('text')}>{text}</p>
  </div>
)

export default Paragraph
