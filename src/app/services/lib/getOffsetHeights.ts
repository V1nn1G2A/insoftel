import { IPosition } from '../model'

export const getOffsetHeights = (positions: IPosition[], number: number) => {
  let result = 0

  for (let i = 0; i < number; i++) {
    const position = positions[i]

    result += position.element.offsetHeight
  }

  return result
}
