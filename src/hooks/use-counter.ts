import { useEffect, useState } from "react"

export function useCounter(
  target: number,
  active: boolean,
  duration = 1500
) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    let start: number | null = null
    let frame: number

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return count
}
