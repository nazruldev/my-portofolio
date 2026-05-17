/** Token layout — konsisten di seluruh section */
export const sectionStyles = {
  container: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
  containerNarrow: "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8",
  section: "py-20 md:py-28",
  stack: "flex flex-col gap-10 md:gap-12",
  stackMd: "flex flex-col gap-6 md:gap-8",
  prose: "max-w-3xl text-base leading-relaxed text-muted-foreground",
  gridCards: "grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3",
  gridCerts: "grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6",
  gridTwoCol: "grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6",
  eyebrow:
    "font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm",
  title: "text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
  line: "mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-transparent",
  surface:
    "rounded-2xl border border-border/70 bg-card shadow-sm",
  cardHover:
    "transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md hover:shadow-primary/10",
  pillGroup:
    "inline-flex flex-wrap gap-1 rounded-full border border-border/80 bg-muted/50 p-1",
  /** Garis & dot memakai sumbu yang sama (--timeline-axis) */
  timeline: "relative ml-3 max-w-4xl [--timeline-axis:0px] md:ml-4",
  timelineLine:
    "pointer-events-none absolute top-3 bottom-3 left-[var(--timeline-axis)] w-px -translate-x-1/2 bg-border",
  timelineItem: "relative pb-8 pl-8 last:pb-0 md:pl-10 md:pb-10",
  timelineDot:
    "absolute top-6 left-[var(--timeline-axis)] z-10 size-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_0_4px] shadow-primary/25",
} as const

export type SectionTone = "default" | "muted" | "card"

export const sectionBg: Record<SectionTone, string> = {
  default: "bg-background",
  muted: "bg-muted/25",
  card: "bg-card/30",
}
