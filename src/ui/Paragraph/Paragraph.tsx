import classNames from 'classnames/bind'

import styles from './paragraph.module.scss'

const cx = classNames.bind(styles)

interface IParagraph {
  title: string
  lines: string[]
  externalStyles?: string[]
}

const Paragraph: React.FC<IParagraph> = ({ title, lines, externalStyles }) => {
  const [paragraph, paragraphTitle, maxWidth] = externalStyles ?? []

  return (
    <div
      style={{ maxWidth: maxWidth }}
      className={cx('paragraph', paragraph)}
    >
      <h3 className={cx('title', paragraphTitle)}>{title}</h3>
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
}
export default Paragraph
