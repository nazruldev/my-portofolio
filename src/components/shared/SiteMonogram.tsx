import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SiteMonogramProps = {
  name: string
  className?: string
  shinyName?: ReactNode
}

export function SiteMonogram({ name, className, shinyName }: SiteMonogramProps) {
  return (
    <span className={cn("font-mono font-semibold tracking-tight", className)}>
      <span className="text-primary">&lt;</span>
      {shinyName ?? name}
      <span className="text-primary">/&gt;</span>
    </span>
  )
}
