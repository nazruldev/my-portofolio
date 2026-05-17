import { useState } from "react"
import { usePortfolio, type ProjectCategory } from "@/i18n"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SectionShell } from "@/components/shared/SectionShell"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

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
            visitLabel={ui.visitSite}
          />
        ))}
      </div>
    </SectionShell>
  )
}

