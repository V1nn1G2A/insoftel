import classNames from 'classnames/bind'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IParagraph {
  title: string
  lines: string[]
  className?: string[]
  width?: string
}

const Paragraph: React.FC<IParagraph> = ({
  title,
  lines,
  className,
  width,
}) => (
  <div className={cx('paragraph', className, width)}>
    <h3 className={cx('title')}>{title}</h3>
    {lines.map(line => (
      <span
        key={line}
        className={cx('text')}
      >
        {line}
      </span>
    ))}
  </div>
)

export default Paragraph
