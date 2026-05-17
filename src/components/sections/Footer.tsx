import { usePortfolio } from "@/data/portfolio"
import { getSocialChannels } from "@/lib/social-channels"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const { site, ui } = usePortfolio()
  const socialIcons = getSocialChannels(site.social)

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className={cn(sectionStyles.container, "py-14 md:py-16")}>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-mono text-lg font-semibold text-foreground">
              <span className="text-primary">&lt;</span>
              {site.name}
              <span className="text-primary">/&gt;</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{site.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">📍 {site.location}</p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-foreground">{ui.footerContact}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground/80">{ui.footerEmail}: </span>
                <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="text-foreground/80">{ui.footerPortfolio}: </span>
                <a
                  href={site.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {site.portfolioUrl.replace(/^https?:\/\//, "")}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-foreground">{ui.footerConnect}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {socialIcons.map(({ id, href, label, Icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.fullName}. {ui.rightsReserved}
        </p>
      </div>
    </footer>
  )
}
