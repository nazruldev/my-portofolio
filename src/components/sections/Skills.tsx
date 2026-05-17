import { usePortfolio } from "@/i18n"
import { Reveal } from "@/components/shared/Reveal"
import { SkillCategoryCard } from "@/components/skills/SkillCategoryCard"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SectionShell } from "@/components/shared/SectionShell"

export function Skills() {
  const { skillGroups, skillsIntro } = usePortfolio()

  return (
    <SectionShell id="skills" tone="default">
      <SectionHeading
        sectionLabel={skillsIntro.sectionLabel}
        title={skillsIntro.title}
        description={skillsIntro.description}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={i * 50}>
            <SkillCategoryCard group={group} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
