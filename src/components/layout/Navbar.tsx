import { useState } from "react"
import { Languages, Menu } from "lucide-react"
import { useLocale, usePortfolio } from "@/i18n"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { Button } from "@/components/ui/button"
import { SiteMonogram } from "@/components/shared/SiteMonogram"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale } = useLocale()
  const { ui } = usePortfolio()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLocale}
      aria-label={ui.toggleLanguage}
      className={cn("shrink-0 gap-1.5 font-mono text-xs", className)}
    >
      <Languages className="size-3.5" />
      {locale === "en" ? "ID" : "EN"}
    </Button>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { site, navLinks, ui } = usePortfolio()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <nav
        className={cn(
          sectionStyles.container,
          "flex h-16 items-center justify-between gap-4"
        )}
      >
        <a href="#home" className="shrink-0 text-lg">
          <SiteMonogram
            name={site.name}
            shinyName={
              <AnimatedShinyText
                shimmerWidth={80}
                className="mx-0 max-w-none text-foreground"
              >
                {site.name}
              </AnimatedShinyText>
            }
          />
        </a>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className={cn(sectionStyles.pillGroup, "gap-0.5 p-1")}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" aria-label={ui.openMenu} />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,20rem)]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <SiteMonogram name={site.name} />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

