import { useState } from "react"
import { Expand } from "lucide-react"
import type { CertificateItem } from "@/data/portfolio.types"
import { Reveal } from "@/components/shared/Reveal"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function CertificateThumbnail({
  src,
  alt,
  fallbackLabel,
  hint,
}: {
  src: string
  alt: string
  fallbackLabel: string
  hint: string
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg bg-muted p-4 text-center text-xs text-muted-foreground sm:w-44">
        {fallbackLabel} — <span className="text-primary">{src}</span>
      </div>
    )
  }

  return (
    <div className="group/thumb relative shrink-0 sm:w-44">
      <img
        src={src}
        alt={alt}
        className="max-h-36 w-full rounded-lg object-contain transition-opacity group-hover/thumb:opacity-90"
        loading="lazy"
        onError={() => setFailed(true)}
      />
      <span
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-lg bg-black/0 text-xs font-medium text-white opacity-0 transition-all group-hover/thumb:bg-black/45 group-hover/thumb:opacity-100 group-focus-visible/thumb:bg-black/45 group-focus-visible/thumb:opacity-100"
        aria-hidden
      >
        <Expand className="size-5" />
        {hint}
      </span>
    </div>
  )
}

type CertificateCardProps = {
  item: CertificateItem
  index: number
  fallbackLabel: string
  viewLabel: string
  viewHint: string
}

export function CertificateCard({
  item,
  index,
  fallbackLabel,
  viewLabel,
  viewHint,
}: CertificateCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={index * 100}>
      <Dialog open={open} onOpenChange={setOpen}>
        <Card
          role="button"
          tabIndex={0}
          aria-label={`${viewLabel}: ${item.title}`}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              setOpen(true)
            }
          }}
          className={cn(
            "cursor-pointer overflow-hidden border-border/70 outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
            sectionStyles.cardHover
          )}
        >
          <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-start">
            <CertificateThumbnail
              src={item.image}
              alt={item.title}
              fallbackLabel={fallbackLabel}
              hint={viewHint}
            />
            <div className="min-w-0 flex-1 space-y-2">
              <CardHeader className="p-0">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.issuer}</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:line-clamp-4">
                  {item.description}
                </p>
                <p className="mt-2 text-xs font-medium text-primary">{viewHint}</p>
              </CardContent>
            </div>
          </div>
        </Card>

        <DialogContent
          className="max-h-[min(96vh,900px)] max-w-[min(96vw,56rem)] gap-0 overflow-hidden border-border/80 p-0 sm:max-w-5xl"
          showCloseButton
        >
          <DialogHeader className="space-y-1 border-b border-border/60 px-4 py-3 text-left sm:px-5 sm:py-4">
            <DialogTitle className="text-base sm:text-lg">{item.title}</DialogTitle>
            <DialogDescription>{item.issuer}</DialogDescription>
          </DialogHeader>

          <div className="overflow-auto bg-muted/30 p-3 sm:p-5">
            <img
              src={item.image}
              alt={item.title}
              className="mx-auto max-h-[min(72vh,720px)] w-full rounded-lg object-contain shadow-sm"
            />
          </div>

          <p className="border-t border-border/60 px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-5 sm:py-4">
            {item.description}
          </p>
        </DialogContent>
      </Dialog>
    </Reveal>
  )
}
