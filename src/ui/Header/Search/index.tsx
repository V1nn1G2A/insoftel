import SearcIcon from '@assets/icons/search.svg'
import { FC } from 'react'

import styles from './index.module.scss'

const Search: FC<> = () => (
  <div className={styles.search}>
    <input
      type="text"
      placeholder="Search"
      className={styles.search__input}
    />
    <SearcIcon />
  </div>
)

export default Search
