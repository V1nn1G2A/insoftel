import cx from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

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

const SearchResult: FC<ISearchResultProps> = ({ results, theme, query, setHoverLink }) => {
  const highlightQuery = (text: string, query: string) => {
    const regex = new RegExp(`(${query})`, 'gi')

    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <strong
          className={styles.highlight}
          key={index}
        >
          {part}
        </strong>
      ) : (
        part
      )
    )
  }

  return (
    <ul className={styles.list}>
      {results.map(({ title, path, text }) => (
        <li
          key={text}
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
              className={cx(styles.link__text, styles[`link__text--${theme}`])}
            >
              {query ? highlightQuery(text, query) : text}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SearchResult
