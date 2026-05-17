import { usePortfolio } from "@/i18n"
import { EducationEntry } from "@/components/education/EducationEntry"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SectionShell } from "@/components/shared/SectionShell"
import { Timeline } from "@/components/shared/Timeline"

export function Education() {
  const { education, educationIntro } = usePortfolio()

  return (
    <SectionShell
      id="education"
      tone="default"
      className="pb-16 md:pb-20"
    >
      <SectionHeading
        sectionLabel={educationIntro.sectionLabel}
        title={educationIntro.title}
        align="left"
      />

      <Timeline>
        {education.map((edu) => (
          <EducationEntry key={`${edu.degree}-${edu.period}`} edu={edu} />
        ))}
      </Timeline>
    </SectionShell>
  )
}
