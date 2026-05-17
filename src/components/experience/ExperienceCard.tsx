import type { ExperienceItem } from "@/data/portfolio.types"
import { Reveal } from "@/components/shared/Reveal"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ExperienceCardProps = {
  exp: ExperienceItem
  index: number
}

export function ExperienceCard({ exp, index }: ExperienceCardProps) {
  return (
    <li className={sectionStyles.timelineItem}>
      <span className={sectionStyles.timelineDot} aria-hidden />
      <Reveal delay={index * 50}>
        <Card className={cn("border-border/70", sectionStyles.cardHover)}>
          <CardHeader className="flex flex-col gap-3 space-y-0 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 space-y-1">
              <CardTitle className="text-lg leading-snug">{exp.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{exp.place}</p>
            </div>
            <Badge variant="outline" className="w-fit shrink-0 font-mono text-xs">
              {exp.date}
            </Badge>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
              {exp.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-secondary"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Reveal>
    </li>
  )
}


