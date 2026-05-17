import { GraduationCap } from "lucide-react"
import type { EducationItem } from "@/data/portfolio.types"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export function EducationEntry({ edu }: { edu: EducationItem }) {
  return (
    <li className={sectionStyles.timelineItem}>
      <span className={sectionStyles.timelineDot} aria-hidden />
      <article
        className={cn(
          sectionStyles.surface,
          "flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6"
        )}
      >
        <div
          className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
          aria-hidden
        >
          <GraduationCap className="size-6" />
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-lg font-semibold leading-snug text-foreground">
              {edu.degree}
            </h3>
            <Badge
              variant="outline"
              className="shrink-0 font-mono text-xs tabular-nums"
            >
              {edu.period}
            </Badge>
          </div>
          {edu.schoolUrl ? (
            <a
              href={edu.schoolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {edu.school}
            </a>
          ) : (
            <p className="text-sm text-muted-foreground">{edu.school}</p>
          )}
        </div>
      </article>
    </li>
  )
}


