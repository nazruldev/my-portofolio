import { sectionBg, sectionStyles, type SectionTone } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type SectionShellProps = {
  id: string
  children: React.ReactNode
  tone?: SectionTone
  className?: string
}

export function SectionShell({
  id,
  children,
  tone = "default",
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        sectionBg[tone],
        sectionStyles.section,
        "[content-visibility:auto] [contain-intrinsic-size:auto_600px]",
        className
      )}
    >
      <div className={cn(sectionStyles.container, sectionStyles.stack)}>
        {children}
      </div>
    </section>
  )
}
