import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

import ArrowIcon from '@/assets/icons/bigArrow.svg'
import { AnimationBlock, TelegramPopup } from '@/ui'

import styles from './index.module.scss'
import { usePopupDispatch } from '@/ui/Popup/PopupContext'

const string = 'Connect with Us on Telegram'

const TelegramBlock = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<Record<number, HTMLSpanElement>>({})
  const isInView = useInView(divRef, { once: true })
  const { openPopup } = usePopupDispatch()

  const setLetterRef = (node: HTMLSpanElement | null, index: number) => {
    if (!node) return
    lettersRef.current[index] = node
  }

  useEffect(() => {
    Object.values(lettersRef.current).forEach(el => {
      if (isInView) el.classList.add(styles.animate)
      else el.classList.remove(styles.animate)
    })
  }, [isInView])

  
    const handleOpenInfo = () => {
      openPopup(<TelegramPopup />);
    };

  return (
    <div
      className={styles.telegramBlock}
      ref={divRef}
    >
      <button className={styles.button} onClick={handleOpenInfo}>
        <span className={styles.button__text}>
          {[...string].map((el, index) => (
            <span
              key={index}
              ref={node => setLetterRef(node, index)}
              style={{ '--count': index + 1 } as React.CSSProperties}
            >
              {el}
            </span>
          ))}
        </span>
        <AnimationBlock className={styles.button__wrapper}>
          <div className={styles.button__round}>
            <ArrowIcon className={styles.button__arrow} />
          </div>
        </AnimationBlock>
      </button>
      <AnimationBlock
        type="p"
        className={styles.text}
      >
        For direct communication, connect with us on Telegram. Clicking the link
        will redirect you to&nbsp;our Telegram chat.
      </AnimationBlock>
    </div>
  )
}

export default TelegramBlock
