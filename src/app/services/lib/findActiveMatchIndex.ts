//import { getOffsetHeights } from '../lib/getOffsetHeights'
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

// export const findActiveMatchIndex = (positions: IPosition[]) => {
//   let activeElement = 0

//   const top = positions[0].start
//   console.log(positions)

//   for (let i = 0; i < positions.length; i++) {
//     const position = positions[i]

//     if (i === 0 && window.scrollY < position.start) {
//       console.log('first active')
//       return i
//     }

//     if (
//       i === positions.length - 1 &&
//       window.scrollY > position.start + getOffsetHeights(positions, i)
//     ) {
//       console.log('last active')
//       return i
//     }

//     console.log('no one active', activeElement)
//     console.log(i, top + getOffsetHeights(positions, i))
//     if (top + getOffsetHeights(positions, i) <= window.scrollY)
//       activeElement = i
//   }

//   return activeElement
// }
