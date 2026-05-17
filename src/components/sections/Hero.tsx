import { ArrowRight, FileDown, Mail, MapPin } from "lucide-react"
import { usePortfolio } from "@/i18n"
import { publicAssets } from "@/lib/public-assets"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { HeroProfile } from "@/components/hero/HeroProfile"
import { Button } from "@/components/ui/button"

type HeroProps = {
  onContact: () => void
}

export function Hero({ onContact }: HeroProps) {
  const { site, ui } = usePortfolio()

  return (
    <section
      id="home"
      className="relative overflow-x-hidden border-b border-border/60 bg-background"
    >
      <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden
      />

      <div
        className={cn(
          sectionStyles.container,
          "relative py-14 md:py-16 lg:py-20"
        )}
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:grid-rows-[auto_auto] lg:items-end lg:gap-x-12 lg:gap-y-0 xl:gap-x-16">
          <div className="order-2 min-w-0 lg:order-1 lg:row-start-1">
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-primary uppercase">
              {site.name}
            </p>

            <h1 className="mt-4 text-[2.75rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              {site.fullName}
            </h1>

            <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-medium text-foreground/90 sm:text-lg">
              <span>{site.title}</span>
              <span className="text-border" aria-hidden>
                /
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
                {site.location}
              </span>
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button nativeButton={false} render={<a href="#projects" />} size="lg">
                {ui.viewProjects}
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={onContact}>
                <Mail className="size-4" />
                {ui.getInTouch}
              </Button>
              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                render={
                  <a href={site.resumeUrl} download target="_blank" rel="noreferrer" />
                }
              >
                <FileDown className="size-4" />
                {ui.resume}
              </Button>
            </div>

            <p className="mt-4 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {site.email}
              </a>
            </p>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:row-start-1 lg:justify-end lg:self-end">
            <HeroProfile
              src={publicAssets.profile}
              alt={`${site.fullName} — ${site.title}, ${site.name}`}
            />
          </div>

          <dl className="order-3 col-span-full grid grid-cols-3 gap-6 border-t border-border/70 pt-6 sm:gap-8 lg:row-start-2">
            {site.stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                  <span className="text-primary">{stat.suffix}</span>
                </dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
