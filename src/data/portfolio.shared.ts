import { publicAssets } from "@/lib/public-assets"
import type { SkillGroupId } from "@/data/portfolio.types"

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
}

export const techMarquee = [
  "React",
  "Next.js",
  "TypeScript",
  "Laravel",
  "Livewire",
  "React Native",
  "Expo",
  "Python",
  "FastAPI",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "MikroTik",
]

export const skillGroupsData: {
  id: SkillGroupId
  skills: { title: string; percentage: string; icon: string }[]
}[] = [
  {
    id: "js",
    skills: [
      { title: "Javascript", percentage: "94%", icon: "javascript" },
      { title: "Typescript", percentage: "76%", icon: "typescript" },
      { title: "JQuery", percentage: "95%", icon: "jquery" },
      { title: "NextJS", percentage: "90%", icon: "nextjs" },
      { title: "NodeJS", percentage: "65%", icon: "nodejs" },
      { title: "NuxtJS", percentage: "73%", icon: "nuxtjs" },
      { title: "AngularJS", percentage: "30%", icon: "angularjs" },
      { title: "VueJS", percentage: "53%", icon: "vuejs" },
      { title: "Svelte", percentage: "53%", icon: "svelte" },
      { title: "React", percentage: "53%", icon: "react" },
      { title: "Nest JS", percentage: "53%", icon: "nestjs" },
      { title: "React Native", percentage: "82%", icon: "react" },
      { title: "Expo", percentage: "78%", icon: "expo" },
    ],
  },
  {
    id: "python",
    skills: [
      { title: "Python", percentage: "88%", icon: "python" },
      { title: "FastAPI", percentage: "72%", icon: "fastapi" },
      { title: "Django", percentage: "65%", icon: "django" },
      { title: "Flask", percentage: "70%", icon: "flask" },
    ],
  },
  {
    id: "php",
    skills: [
      { title: "PHP", percentage: "94%", icon: "php" },
      { title: "Yii", percentage: "76%", icon: "yii" },
      { title: "Codeigniter", percentage: "95%", icon: "codeigniter" },
      { title: "Laravel", percentage: "90%", icon: "laravel" },
    ],
  },
  {
    id: "css",
    skills: [
      { title: "CSS3", percentage: "94%", icon: "css3" },
      { title: "Sass", percentage: "76%", icon: "sass" },
      { title: "Tailwind CSS", percentage: "95%", icon: "tailwindcss" },
      { title: "Bootstrap", percentage: "70%", icon: "bootstrap" },
      { title: "Vuetify", percentage: "86%", icon: "vuetify" },
      { title: "Bulma", percentage: "66%", icon: "bulma" },
    ],
  },
  {
    id: "db",
    skills: [
      { title: "MySQL", percentage: "94%", icon: "mysql" },
      { title: "MongoDB", percentage: "76%", icon: "mongodb" },
      { title: "Sqlite", percentage: "90%", icon: "sqlite" },
      { title: "PostgreSQL", percentage: "95%", icon: "postgresql" },
      { title: "Redis", percentage: "90%", icon: "redis" },
      { title: "NocoDB", percentage: "82%", icon: "mongodb" },
    ],
  },
  {
    id: "server",
    skills: [
      { title: "Apache", percentage: "76%", icon: "apache" },
      { title: "Nginx", percentage: "76%", icon: "nginx" },
      { title: "Github", percentage: "95%", icon: "github" },
      { title: "Docker", percentage: "65%", icon: "docker" },
      { title: "Kafka", percentage: "45%", icon: "apachekafka" },
      { title: "Figma", percentage: "90%", icon: "figma" },
      { title: "Git", percentage: "90%", icon: "git" },
      { title: "Gitlab", percentage: "90%", icon: "gitlab" },
      { title: "Adobe XD", percentage: "67%", icon: "xd" },
      { title: "Illustrator", percentage: "65%", icon: "illustrator" },
      { title: "Photoshop", percentage: "70%", icon: "photoshop" },
      { title: "Trello", percentage: "90%", icon: "trello" },
      { title: "MikroTik", percentage: "75%", icon: "linux" },
      { title: "Microsoft Office", percentage: "85%", icon: "microsoft" },
    ],
  },
]

export const projectsData = [
  {
    id: "human-compass-constantine",
    stack: "mobile" as const,
    badges: ["React Native", "Expo", "Private"],
    tech: ["React Native", "Expo", "Maps", "GPS"],
  },
  {
    id: "oneclick-garudafood",
    stack: "mobile" as const,
    badges: ["React Native", "Expo", "Private"],
    tech: ["React Native", "Expo", "REST API"],
  },
  {
    id: "vdr-nusantara",
    stack: "nextjs" as const,
    badges: ["Next.js", "VDR", "Private"],
    tech: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "jibi",
    stack: "nextjs" as const,
    badges: ["Next.js", "Private"],
    tech: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "djp-ews",
    stack: "nextjs" as const,
    badges: ["Next.js", "Public"],
    tech: ["Next.js", "Monitoring", "Dashboard"],
  },
  {
    id: "djki",
    stack: "nextjs" as const,
    badges: ["Next.js", "POC", "AI"],
    tech: ["Next.js", "Computer Vision", "AI"],
  },
  {
    id: "sportirena",
    stack: "nextjs" as const,
    badges: ["Next.js", "Public"],
    tech: ["Next.js", "Booking", "Search"],
    url: "https://www.sportirena.com/",
  },
  {
    id: "udbjm",
    stack: "livewire" as const,
    badges: ["Livewire", "Private"],
    tech: ["Laravel", "Livewire", "MySQL"],
  },
  {
    id: "sisfon",
    stack: "laravel" as const,
    badges: ["Laravel", "Public"],
    tech: ["Laravel", "Documentation", "Multi-village"],
  },
  {
    id: "agyman",
    stack: "laravel" as const,
    badges: ["Laravel", "Product"],
    tech: ["Laravel", "PHP", "Admin"],
    url: "https://projects.co.id/user/my_products/screenshots/d65b11/agyman-sistim-manajement-gym-responsive/",
  },
  {
    id: "lavawail",
    stack: "laravel" as const,
    badges: ["Laravel", "Product"],
    tech: ["Laravel", "PHP", "Downloader"],
  },
]

export const certificatesData = [
  {
    id: "ibm-rpa-basic",
    title: "IBM Robotic Process Automation - Basic",
    image: publicAssets.certificates.cer1,
  },
  {
    id: "ibm-rpa-basic-ii",
    title: "IBM Robotic Process Automation - Basic II",
    image: publicAssets.certificates.cer1,
  },
]
