import { usePortfolio } from "@/i18n"
import { CertificateCard } from "@/components/certificates/CertificateCard"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SectionShell } from "@/components/shared/SectionShell"
import { sectionStyles } from "@/lib/section-styles"

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
            viewLabel={ui.viewCertificate}
            viewHint={ui.viewCertificateHint}
          />
        ))}
      </div>
    </SectionShell>
  )
}


