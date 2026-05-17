import { ExternalLink } from "lucide-react"
import type { ProjectItem } from "@/data/portfolio.types"
import { Reveal } from "@/components/shared/Reveal"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ProjectCardProps = {
  project: ProjectItem
  index: number
  visitLabel: string
}

export function ProjectCard({ project, index, visitLabel }: ProjectCardProps) {
  return (
    <Reveal delay={index * 40} className="h-full">
      <Card
        className={cn(
          "flex h-full flex-col border-border/70",
          sectionStyles.cardHover
        )}
      >
        <CardHeader className="space-y-3 pb-3">
          <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-1.5">
            {project.badges.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[0.65rem]">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-1 space-y-3 pt-0">
          <CardDescription className="line-clamp-4 text-sm leading-relaxed">
            {project.description}
          </CardDescription>
          {project.highlight ? (
            <p className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
              {project.highlight}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((t) => (
              <Badge key={t} variant="outline" className="text-[0.65rem] font-normal">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
        {project.url ? (
          <CardFooter className="border-t border-border/50 pt-4">
            <Button
              size="sm"
              variant="outline"
              nativeButton={false}
              render={
                <a href={project.url} target="_blank" rel="noopener noreferrer" />
              }
            >
              {project.linkLabel ?? visitLabel}
              <ExternalLink className="size-3.5" />
            </Button>
          </CardFooter>
        ) : null}
      </Card>
    </Reveal>
  )
}

