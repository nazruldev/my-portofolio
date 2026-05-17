import type { Locale, PortfolioContent, PortfolioTranslations } from "@/data/portfolio.types"
import {
  certificatesData,
  projectsData,
  siteBase,
  skillGroupsData,
  techMarquee,
} from "@/data"
import { en } from "@/i18n/translations/en"
import { id } from "@/i18n/translations/id"

const translations: Record<Locale, PortfolioTranslations> = { en, id }

const statLabelKeys = ["yearsExperience", "successfulProjects", "expertDomains"] as const

export function buildPortfolio(locale: Locale): PortfolioContent {
  const t = translations[locale]

  return {
    seo: t.seo,
    site: {
      ...siteBase,
      title: t.site.title,
      tagline: t.site.tagline,
      stats: siteBase.stats.map((stat, i) => ({
        value: stat.value,
        suffix: stat.suffix,
        label: t.site.statLabels[statLabelKeys[i]],
      })),
    },
    ui: t.ui,
    navLinks: t.navLinks,
    aboutIntro: t.aboutIntro,
    aboutParagraphs: t.aboutParagraphs,
    skillsIntro: t.skillsIntro,
    skillGroups: skillGroupsData.map((group) => ({
      id: group.id,
      title: t.skillGroupTitles[group.id],
      skills: group.skills,
    })),
    projectsIntro: t.projectsIntro,
    projectFilters: t.projectFilters,
    projects: projectsData.map((project) => {
      const copy = t.projects[project.id]
      return {
        ...project,
        title: copy.title,
        description: copy.description,
        highlight: copy.highlight,
        linkLabel: copy.linkLabel,
      }
    }),
    certificatesIntro: t.certificatesIntro,
    certificates: certificatesData.map((cert) => ({
      ...cert,
      ...t.certificates[cert.id],
    })),
    experienceIntro: t.experienceIntro,
    experiences: t.experiences,
    educationIntro: t.educationIntro,
    education: t.education,
    techMarquee,
  }
}
