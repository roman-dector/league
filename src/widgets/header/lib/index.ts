import { useCallback, useMemo } from 'react'

export function useFontScale() {
  const body = useMemo(() => document.body, [])

  const increase = useCallback(() => {
    body.style.fontSize =
      parseInt(getComputedStyle(body, '').fontSize) + 2 + 'px'

    localStorage.setItem('fontSize', body.style.fontSize)
  }, [])
  const decrease = useCallback(() => {
    body.style.fontSize =
      parseInt(getComputedStyle(body, '').fontSize) - 2 + 'px'

    localStorage.setItem('fontSize', body.style.fontSize)
  }, [])

  return { increase, decrease }
}
