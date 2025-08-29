import type Lenis from 'lenis'

import { IPosition } from '../model'

export const findActiveMatchIndex = (positions: IPosition[], lenis: Lenis) => {
  const contentHeight = 1400
  const oneSectionHeight = contentHeight / positions.length
  const maxIndex = positions.length - 1

  let activeIndex = Math.floor(
    (lenis.scroll - positions[0].end) / oneSectionHeight
  )

  activeIndex = activeIndex < 0 ? 0 : activeIndex

  return maxIndex > activeIndex ? activeIndex : maxIndex
}
