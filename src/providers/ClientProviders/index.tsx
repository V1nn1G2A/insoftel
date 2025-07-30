'use client'

import { ReactNode } from 'react'

import { LenisProvider } from '../LenisProvider'

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return <LenisProvider>{children}</LenisProvider>
}
