import type Lenis from '@studio-freight/lenis/types'

import { IPosition } from '../model'

export const findActiveIndex = (positions: IPosition[], lenis: Lenis) => {
  for (let i = 0; i < positions?.length; i++) {
    const position = positions[i]

    if (
      position.start <= lenis.scroll &&
      position.end >= lenis.scroll + window.innerHeight
    ) {
      return i
    }

    if (i === 0) {
      if (position.end >= lenis.scroll + window.innerHeight) {
        return i
      }
    }

    if (i === positions.length - 1) {
      if (position.start <= lenis.scroll) {
        return i
      }
    }
  }

  return null
}
