'use client'

import { LenisContext } from '.'
import { useContext } from 'react'

export const useLenis = () => {
  const value = useContext(LenisContext)
  if (value === null) throw new Error("Don't use Lenis without Provider")
  return value
}
