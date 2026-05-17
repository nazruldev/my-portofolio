export type Locale = "en" | "id"

export type SkillGroupId =
  | "js"
  | "python"
  | "php"
  | "css"
  | "db"
  | "server"

export type SkillItem = {
  title: string
  percentage: string
  icon: string
}

export type SkillGroup = {
  id: SkillGroupId
  title: string
  skills: SkillItem[]
}

export type ProjectStack = "nextjs" | "laravel" | "livewire" | "mobile"
export type ProjectCategory = "all" | ProjectStack

export type ProjectItem = {
  id: string
  stack: ProjectStack
  title: string
  description: string
  badges: string[]
  tech: string[]
  highlight?: string
  url?: string
  linkLabel?: string
}

export type CertificateItem = {
  id: string
  title: string
  issuer: string
  description: string
  image: string
}

export type ExperienceItem = {
  title: string
  date: string
  place: string
  bullets: string[]
}

export type EducationItem = {
  degree: string
  school: string
  schoolUrl: string
  period: string
}

export type SeoContent = {
  title: string
  description: string
  keywords: string
  ogTitle: string
  ogDescription: string
}

export type PortfolioContent = {
  seo: SeoContent
  site: {
    name: string
    fullName: string
    heroGreeting: string
    title: string
    tagline: string
    email: string
    location: string
    portfolioUrl: string
    resumeUrl: string
    typewriterWords: string[]
    stats: { value: number; suffix: string; label: string }[]
    social: {
      github: string
      linkedin: string
      whatsapp: string
      telegram: string
      discord: string
      facebook: string
    }
  }
  ui: {
    skipToContent: string
    viewProjects: string
    learnMore: string
    resume: string
    getInTouch: string
    sendEmail: string
    close: string
    visitSite: string
    viewProduct: string
    reachOut: string
    contactIntro: string
    footerAbout: string
    footerContact: string
    footerConnect: string
    footerEmail: string
    footerPortfolio: string
    rightsReserved: string
    toggleTheme: string
    openMenu: string
    toggleLanguage: string
    certificateBadgeFallback: string
  }
  navLinks: { href: string; label: string }[]
  aboutIntro: { sectionLabel: string; title: string }
  aboutParagraphs: string[]
  skillsIntro: {
    sectionLabel: string
    title: string
    subtitle: string
    description: string
  }
  skillGroups: SkillGroup[]
  projectsIntro: { sectionLabel: string; title: string }
  projectFilters: { id: ProjectCategory; label: string }[]
  projects: ProjectItem[]
  certificatesIntro: { sectionLabel: string; title: string }
  certificates: CertificateItem[]
  experienceIntro: {
    sectionLabel: string
    title: string
    description: string
  }
  experiences: ExperienceItem[]
  educationIntro: { sectionLabel: string; title: string }
  education: EducationItem[]
  techMarquee: string[]
}

export type PortfolioTranslations = Omit<
  PortfolioContent,
  "site" | "skillGroups" | "projects" | "certificates" | "techMarquee" | "seo"
> & {
  seo: SeoContent
  site: Pick<
    PortfolioContent["site"],
    "heroGreeting" | "title" | "tagline" | "typewriterWords"
  > & {
    statLabels: {
      yearsExperience: string
      successfulProjects: string
      expertDomains: string
    }
  }
  skillGroupTitles: Record<SkillGroupId, string>
  projects: Record<
    string,
    Pick<ProjectItem, "title" | "description" | "highlight" | "linkLabel">
  >
  certificates: Record<
    string,
    Pick<CertificateItem, "issuer" | "description">
  >
}
