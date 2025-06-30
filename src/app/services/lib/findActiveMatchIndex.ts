//import { getOffsetHeights } from '../lib/getOffsetHeights'
import { IPosition } from '../model'

export const findActiveMatchIndex = (positions: IPosition[]) => {
  const contentHeight = 4388
  const oneSectionHeight = contentHeight / positions.length
  const maxIndex = positions.length - 1

  const activeIndex = Math.floor(window.scrollY / oneSectionHeight)

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
