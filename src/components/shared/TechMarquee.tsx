import { usePortfolio } from "@/i18n"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

function TechPill({ label }: { label: string }) {
  return (
    <span className="mx-3 inline-flex shrink-0 items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-medium text-foreground">
      {label}
    </span>
  )
}

export function TechMarquee({ className }: { className?: string }) {
  const { techMarquee } = usePortfolio()

  return (
    <div
      className={cn(
        "border-y border-border/60 bg-muted/20 py-4 [--duration:40s]",
        className
      )}
    >
      <Marquee pauseOnHover repeat={2} className="[--gap:0.25rem] [--duration:55s]">
        {techMarquee.map((tech) => (
          <TechPill key={tech} label={tech} />
        ))}
      </Marquee>
    </div>
  )
}
