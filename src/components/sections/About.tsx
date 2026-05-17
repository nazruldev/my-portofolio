import { usePortfolio } from "@/i18n"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SectionShell } from "@/components/shared/SectionShell"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

export function About() {
  const { aboutIntro, aboutParagraphs } = usePortfolio()

  return (
    <SectionShell id="about" tone="muted">
      <SectionHeading
        sectionLabel={aboutIntro.sectionLabel}
        title={aboutIntro.title}
        align="left"
      />

      <div className={cn(sectionStyles.surface, "p-6 md:p-8 lg:p-10")}>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {aboutParagraphs.map((paragraph, i) => (
            <p
              key={paragraph.slice(0, 40)}
              className={cn(
                "leading-relaxed text-muted-foreground",
                i === 0 && "text-base text-foreground/90 md:col-span-2"
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
