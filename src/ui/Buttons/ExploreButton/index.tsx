import classNames from 'classnames/bind'

import ArrowIcon from '@/assets/icons/arrow.svg'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IExploreButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  colorVariant?: 'light' | 'dark'
  classNames?: string[]
  onClick?: (e: React.MouseEvent) => void
}

const ExploreButton: React.FC<IExploreButton> = ({
  text = 'Explore',
  colorVariant = 'light',
  classNames,
  onClick,
}) => {
  const [miniText, miniRound, miniButton] = classNames ?? []

  return (
    <button
      className={cx('button', colorVariant, miniButton)}
      onClick={onClick}
    >
      <p className={cx('text', colorVariant, miniText)}>{text}</p>
      <div className={cx('round', colorVariant, miniRound)}>
        <ArrowIcon className={cx('arrow', colorVariant)} />
      </div>
    </button>
  )
}
export default ExploreButton
