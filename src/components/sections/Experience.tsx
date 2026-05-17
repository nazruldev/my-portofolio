import { usePortfolio } from "@/i18n"
import { ExperienceCard } from "@/components/experience/ExperienceCard"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SectionShell } from "@/components/shared/SectionShell"
import { Timeline } from "@/components/shared/Timeline"

export function Experience() {
  const { experienceIntro, experiences } = usePortfolio()

  return (
    <SectionShell id="experience" tone="default">
      <SectionHeading
        sectionLabel={experienceIntro.sectionLabel}
        title={experienceIntro.title}
      />

      <Timeline>
        {experiences.map((exp, i) => (
          <ExperienceCard key={`${exp.title}-${exp.date}`} exp={exp} index={i} />
        ))}
      </Timeline>
    </SectionShell>
  )
}
