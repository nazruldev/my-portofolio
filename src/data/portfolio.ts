/**
 * Data portfolio — konten bilingual di `src/i18n/translations/`.
 * Gunakan `usePortfolio()` di komponen untuk konten sesuai bahasa aktif.
 */

export type {
  CertificateItem,
  EducationItem,
  ExperienceItem,
  Locale,
  PortfolioContent,
  ProjectCategory,
  ProjectItem,
  ProjectStack,
  SkillGroup,
  SkillGroupId,
  SkillItem,
} from "@/data/portfolio.types"

export { techMarquee } from "@/data/portfolio.shared"
export { useLocale, usePortfolio, LocaleProvider } from "@/i18n/locale-provider"
