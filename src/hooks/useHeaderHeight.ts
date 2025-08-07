import { useMediaQuery } from './useMediaQuery'

export const useHeaderHeight = (): number => {
  const isSmall = useMediaQuery('(max-width: 768px)')
  const isLarge = useMediaQuery('(min-width: 769px)')

  if (isSmall) return 63
  if (isLarge) return 85

  return 85
}
