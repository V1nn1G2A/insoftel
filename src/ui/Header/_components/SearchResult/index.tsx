import cx from 'classnames'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import styles from './index.module.scss'

export interface ISearchResult {
  title: string
  path: string
  text: string
}

interface ISearchResultProps {
  results: ISearchResult[]
  theme: 'dark' | 'light'
  query: string
  setHoverLink: (link: string) => void
}

const SearchResult: FC<ISearchResultProps> = ({
  results,
  theme,
  query,
  setHoverLink,
}) => {
  const [visibleResults, setVisibleResults] = useState<ISearchResult[]>(results)
  const [canScrollTop, setCanScrollTop] = useState(false)
  const [canScrollBottom, setCanScrollBottom] = useState(false)

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const target = e.currentTarget
    setCanScrollTop(target.scrollTop > 0)
    setCanScrollBottom(
      target.scrollHeight > target.scrollTop + target.clientHeight
    )
  }

  useEffect(() => {
    if (results.length > 0) {
      setVisibleResults(results)
    } else {
      const timer = setTimeout(() => setVisibleResults([]), 600)
      return () => clearTimeout(timer)
    }
  }, [results])

  const highlightQuery = (text: string, query: string) => {
    if (!query) return text

    return text.split(/\b/).map((word, index) =>
      word.toLowerCase().includes(query.toLowerCase()) ? (
        <strong
          className={styles.highlight}
          key={index}
        >
          {word}
        </strong>
      ) : (
        word
      )
    )
  }

  console.log('top:' + canScrollTop)
  console.log('bottom:' + canScrollBottom)

  return (
    <>
      <ul
        className={cx(styles.list, styles[`list--${theme}`], {
          [styles[`list--active`]]: results.length > 0,
        })}
        tabIndex={0}
        onScroll={handleScroll}
      >
        <div className={styles.shadow}>
          <div
            className={cx(styles.shadow__top, {
              [styles.notVisible]: !canScrollTop,
            })}
          />
          <div
            className={cx(styles.shadow__bottom, {
              [styles.notVisible]: !canScrollBottom,
            })}
          />
        </div>
        <div className={styles.resultsWrapper}>
          {visibleResults.map(({ title, path, text }, index) => (
            <li
              key={text + index}
              className={cx(styles.item, {
                [styles['item--dark']]: theme === 'dark',
                [styles['item--light']]: theme === 'light',
              })}
              onMouseEnter={() => setHoverLink(path)}
              onMouseLeave={() => setHoverLink('')}
            >
              <Link
                href={path}
                className={styles.link}
              >
                <h2
                  className={cx(
                    styles.link__title,
                    styles[`link__title--${theme}`]
                  )}
                >
                  {title}
                </h2>
                <p
                  className={cx(
                    styles.link__text,
                    styles[`link__text--${theme}`]
                  )}
                >
                  {query ? highlightQuery(text, query) : text}
                </p>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </>
  )
}

export default SearchResult
