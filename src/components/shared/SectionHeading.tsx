import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/shared/Reveal"

type SectionHeadingProps = {
  sectionLabel: string
  title: string
  description?: string
  className?: string
  align?: "left" | "split"
}

export function SectionHeading({
  sectionLabel,
  title,
  description,
  className,
  align = "split",
}: SectionHeadingProps) {
  return (
    <Reveal>
      <header
        className={cn(
          "border-b border-border/50 pb-8 md:pb-10",
          align === "split" &&
            "flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10",
          className
        )}
      >
        <div className="min-w-0">
          <p className={sectionStyles.eyebrow}>{sectionLabel}</p>
          <h2 className={cn(sectionStyles.title, "mt-2")}>{title}</h2>
          <div className={sectionStyles.line} aria-hidden />
        </div>
        {description ? (
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed text-muted-foreground",
              align === "split" && "md:text-right"
            )}
          >
            {description}
          </p>
        ) : null}
      </header>
    </Reveal>
  )
}
