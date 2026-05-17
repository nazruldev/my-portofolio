import type { SkillGroup } from "@/data/portfolio"
import { skillGroupIcon } from "@/lib/skill-group-icons"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type SkillCategoryCardProps = {
  group: SkillGroup
}

export function SkillCategoryCard({ group }: SkillCategoryCardProps) {
  return (
    <Card className={cn("h-full border-border/70", sectionStyles.cardHover)}>
      <CardHeader className="flex-row items-center gap-3 space-y-0 pb-3">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl"
          aria-hidden
        >
          {skillGroupIcon(group.id)}
        </span>
        <CardTitle className="text-base leading-snug">{group.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-1.5">
          {group.skills.map((skill) => (
            <Badge
              key={skill.title}
              variant="outline"
              className="text-[0.7rem] font-normal"
              title={skill.percentage}
            >
              {skill.title}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
