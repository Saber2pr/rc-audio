import { useEffect } from "react"

export const useInterval = (
  callback: Function,
  delay = 1000,
  cancel = false
) => {
  useEffect(() => {
    let handle: number
    if (cancel) {
      clearInterval(handle)
    } else {
      handle = setInterval(callback, delay)
    }
    return () => clearInterval(handle)
  }, [callback, delay, cancel])
}
