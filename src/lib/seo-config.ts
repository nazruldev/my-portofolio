import { siteBase } from "@/data/site"
import { publicAssets } from "@/lib/public-assets"

/** Production origin — update if domain changes */
export const SITE_ORIGIN = siteBase.portfolioUrl.replace(/\/$/, "")

export const SEO_DEFAULTS = {
  siteName: siteBase.name,
  author: siteBase.fullName,
  email: siteBase.email,
  localeDefault: "en" as const,
  ogImage: `${SITE_ORIGIN}${publicAssets.profile}`,
  ogImageWidth: 1200,
  ogImageHeight: 1200,
  twitterHandle: undefined as string | undefined,
  sameAs: Object.values(siteBase.social),
  knowsAbout: [
    "Full Stack Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "React Native",
    "Expo",
    "Python",
    "FastAPI",
    "Tailwind CSS",
    "PostgreSQL",
    "Docker",
  ],
} as const

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`
}
