import { publicAssets } from "@/lib/public-assets"

export const siteBase = {
  name: "nazrul.dev",
  fullName: "Nasrul",
  email: "nazrul.dev@gmail.com",
  location: "Indonesia",
  portfolioUrl: "https://nazrul.dev/",
  resumeUrl: publicAssets.resume,
  social: {
    github: "https://github.com/mominurr",
    linkedin: "https://www.linkedin.com/in/mominur--rahman/",
    whatsapp: "https://wa.me/6281234567890",
    telegram: "https://t.me/mominurr",
    discord: "https://discord.gg/mominurr",
    facebook: "https://www.facebook.com/mominurr518",
  },
  stats: [
    { value: 10, suffix: "+", labelKey: "yearsExperience" as const },
    { value: 16, suffix: "", labelKey: "successfulProjects" as const },
    { value: 6, suffix: "", labelKey: "expertDomains" as const },
  ],
} as const
