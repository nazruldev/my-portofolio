import type { ReactNode } from "react"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type TimelineProps = {
  children: ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <ol className={cn(sectionStyles.timeline, "mx-auto space-y-0", className)}>
      <div className={sectionStyles.timelineLine} aria-hidden />
      {children}
    </ol>
  )
}
