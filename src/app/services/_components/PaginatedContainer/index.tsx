'use client'

import cn from 'classnames/bind'
import { type FC, useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

import { useMediaQuery } from '@/hooks'

import { servicesPagination } from '../../_constants/SERVICES'
import { findActiveIndex, findActiveMatchIndex } from '../../lib'
import type { IPosition } from '../../model/IPosition'
import PaginatedBlock from '../PaginatedBlock/PaginatedBlock'

import styles from './index.module.scss'

interface IPaginatedContainer {
  className?: string
}

const cx = cn.bind(styles)

export const PaginatedContainer: FC<IPaginatedContainer> = ({ className }) => {
  const containerWrapperRef = useRef<React.ComponentRef<'div'>>(null)
  const containerRef = useRef<React.ComponentRef<'div'>>(null)
  const refs = useRef<React.ComponentRef<'div'>[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [activeMatchIndex, setActiveMatchIndex] = useState(0)
  const [positions, setPositions] = useState<IPosition[]>([])
  const [isRelative, setIsRelative] = useState(false)
  const mobileMatch = useMediaQuery(
    '(min-height: 715px) and (max-width: 1279px)'
  )
  const deskMatch = useMediaQuery(
    '(min-height: 848px) and (min-width: 1279px )'
  )

  console.log(positions)

  useEffect(() => {
    if (!containerRef.current) return

    let positions: IPosition[]
    let isProcessing = false

    setIsRelative(true)

    const resizeObserver = new ResizeObserver(() => {
      if (isProcessing) return
      isProcessing = true

      flushSync(() => setIsRelative(false))

      positions = refs.current.reduce<IPosition[]>((acc, element, index) => {
        if (index === 0) {
          const top = 0
          const start = element.offsetTop
          const end = element.offsetTop + element.offsetHeight

          acc[index] = { top, start, end, element }
        } else {
          const start =
            element.offsetTop -
            window.innerHeight -
            (index - 1) * window.innerHeight

          const top = -(index * window.innerHeight)

          const end = start + element.offsetHeight

          acc[index] = {
            top,
            start,
            end,
            element,
          }
        }

        return acc
      }, [])

      setPositions(positions)
      setIsRelative(true)
      isProcessing = false
    })

    const onWindowScroll = () => {
      const activeIndex = findActiveIndex(positions)
      setActiveIndex(activeIndex)
    }

    window.addEventListener('scroll', onWindowScroll)
    resizeObserver.observe(containerRef.current)

    return () => {
      window.removeEventListener('scroll', onWindowScroll)
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const activeIndex = findActiveMatchIndex(positions)
      setActiveMatchIndex(activeIndex)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [mobileMatch, deskMatch, positions])

  const getContainerHeight = () => {
    if (mobileMatch || deskMatch) return 'max-content'
    return `${(positions.at(-1)?.end ?? 0) - (positions[0]?.start ?? 0)}px`
  }

  const getContainerWrapperHeight = () => {
    if (mobileMatch || deskMatch) return '4388px'
    return 'max-content'
  }

  const getPositionStyle = () => {
    if (mobileMatch || deskMatch) return 'absolute'
    return isRelative ? 'relative' : 'static'
  }

  const getTopPosition = (index: number) => {
    if (mobileMatch || deskMatch) return 0
    return `${positions[index]?.top}px`
  }

  const getOpacityStyle = (index: number) => {
    if (mobileMatch || deskMatch) return activeMatchIndex === index ? 1 : 0
    return activeIndex === index ? 1 : 0
  }

  const getZIndex = (index: number) => {
    if (mobileMatch || deskMatch) return activeMatchIndex === index ? 1 : 0
    return 0
  }

  const getContainerMargins = () => {
    if (deskMatch) {
      const height =
        (containerRef.current?.offsetHeight ?? 0) -
        (refs.current[activeMatchIndex]?.offsetWidth ?? 0)
      return `${Math.abs(height / 8)}px 0 0`
    }
    return 0
  }

  return (
    <div
      className={cx('container-wrapper')}
      ref={containerWrapperRef}
      style={{
        height: getContainerWrapperHeight(),
      }}
    >
      <section
        className={cx('container', className)}
        ref={containerRef}
        style={{
          height: getContainerHeight(),
          position: `${mobileMatch || deskMatch ? 'sticky' : 'static'}`,
          top: 0,
          margin: getContainerMargins(),
        }}
      >
        {servicesPagination.map((page, index) => (
          <div
            ref={node => {
              if (node) refs.current[index] = node
            }}
            key={page.letter}
            className={cx('content', page.letter)}
            style={{
              opacity: getOpacityStyle(index),
              position: getPositionStyle(),
              zIndex: getZIndex(index),
              top: getTopPosition(index),
              transition: 'opacity .5s',
              padding: getContainerMargins(),
            }}
          >
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
        ))}
      </section>
    </div>
  )
}
