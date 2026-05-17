import { useState } from "react"
import { usePortfolio, type CertificateItem } from "@/data/portfolio"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SectionShell } from "@/components/shared/SectionShell"
import { sectionStyles } from "@/lib/section-styles"
import { useReveal } from "@/hooks/use-reveal"
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

function CertificateCard({
  item,
  index,
  fallbackLabel,
}: {
  item: CertificateItem
  index: number
  fallbackLabel: string
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.08)

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "visible")}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
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
    </div>
  )
}

export function Certificates() {
  const { certificates, certificatesIntro, ui } = usePortfolio()

  return (
    <SectionShell id="certificates" tone="default">
      <SectionHeading
        sectionLabel={certificatesIntro.sectionLabel}
        title={certificatesIntro.title}
      />

      <div className={sectionStyles.gridCerts}>
        {certificates.map((item, i) => (
          <CertificateCard
            key={item.id}
            item={item}
            index={i}
            fallbackLabel={ui.certificateBadgeFallback}
          />
        ))}
      </div>
    </SectionShell>
  )
}
