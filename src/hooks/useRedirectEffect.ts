import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export function useRedirectEffect(callback: () => void) {
  const pathname = usePathname()
  const router = useRouter()
  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      return
    }

    callback()
  }, [pathname, callback, router])
}

export default useRedirectEffect
