import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/use-reveal"

type SectionHeaderProps = {
  label: string
  title: string
  className?: string
}

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 transition-all duration-700",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
    >
      <span className="font-mono text-sm font-medium text-primary">{label}</span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-1 w-20 origin-left rounded-full bg-primary transition-all duration-700 delay-150",
          visible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        )}
      />
    </div>
  )
}

