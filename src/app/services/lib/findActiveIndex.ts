import { IPosition } from '../model'

export const findActiveIndex = (positions: IPosition[]) => {
  for (let i = 0; i < positions?.length; i++) {
    const position = positions[i]

    if (
      position.start <= window.scrollY &&
      position.end >= window.scrollY + window.innerHeight
    ) {
      return i
    }

    if (i === 0) {
      if (position.end >= window.scrollY + window.innerHeight) {
        return i
      }
    }

    if (i === positions.length - 1) {
      if (position.start <= window.scrollY) {
        return i
      }
    }
  }

  return null
}
