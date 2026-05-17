import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { usePortfolio, type ProjectCategory, type ProjectItem } from "@/data/portfolio"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SectionShell } from "@/components/shared/SectionShell"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/shared/Reveal"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function ProjectCard({
  project,
  index,
  visitLabel,
}: {
  project: ProjectItem
  index: number
  visitLabel: string
}) {
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

export function Projects() {
  const { projects, projectsIntro, projectFilters, ui } = usePortfolio()
  const [filter, setFilter] = useState<ProjectCategory>("all")

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.stack === filter)

  return (
    <SectionShell id="projects" tone="muted">
      <SectionHeading
        sectionLabel={projectsIntro.sectionLabel}
        title={projectsIntro.title}
      />

      <div className={sectionStyles.pillGroup}>
        {projectFilters.map((f) => (
          <Button
            key={f.id}
            type="button"
            size="sm"
            variant={filter === f.id ? "default" : "ghost"}
            className={cn(
              "rounded-full px-4",
              filter !== f.id && "text-muted-foreground"
            )}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      <div className={sectionStyles.gridCards}>
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            visitLabel={project.id === "agyman" ? ui.viewProduct : ui.visitSite}
          />
        ))}
      </div>
    </SectionShell>
  )
}
