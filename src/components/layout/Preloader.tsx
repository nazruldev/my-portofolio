import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 250)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        hidden && "pointer-events-none opacity-0"
      )}
      aria-hidden={hidden}
    >
      <div className="size-12 animate-spin rounded-full border-4 border-muted border-t-primary" />
    </div>
  )
}
