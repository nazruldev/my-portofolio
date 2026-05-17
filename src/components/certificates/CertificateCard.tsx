import { useState } from "react"
import type { CertificateItem } from "@/data/portfolio.types"
import { Reveal } from "@/components/shared/Reveal"
import { sectionStyles } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function CertificateImage({
  src,
  alt,
  fallbackLabel,
}: {
  src: string
  alt: string
  fallbackLabel: string
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
    <img
      src={src}
      alt={alt}
      className="max-h-36 w-full rounded-lg object-contain sm:w-44"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

type CertificateCardProps = {
  item: CertificateItem
  index: number
  fallbackLabel: string
}

export function CertificateCard({ item, index, fallbackLabel }: CertificateCardProps) {
  return (
    <Reveal delay={index * 100}>
      <Card className={cn("overflow-hidden border-border/70", sectionStyles.cardHover)}>
        <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-start">
          <CertificateImage
            src={item.image}
            alt={item.title}
            fallbackLabel={fallbackLabel}
          />
          <div className="min-w-0 flex-1 space-y-2">
            <CardHeader className="p-0">
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription>{item.issuer}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </div>
        </div>
      </Card>
    </Reveal>
  )
}

