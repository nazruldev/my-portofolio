import type { Locale, PortfolioContent } from "@/data/portfolio.types"
import { SEO_DEFAULTS, SITE_ORIGIN } from "@/lib/seo-config"
import type { PageSeo } from "@/lib/seo-document"

export function buildPageSeo(
  locale: Locale,
  content: PortfolioContent
): PageSeo {
  const { seo, site } = content
  const canonical = SITE_ORIGIN + "/"
  const ogLocale = locale === "id" ? "id_ID" : "en_US"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${canonical}#website`,
        url: canonical,
        name: SEO_DEFAULTS.siteName,
        description: seo.description,
        inLanguage: ["en-US", "id-ID"],
        publisher: { "@id": `${canonical}#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: seo.title,
        description: seo.description,
        inLanguage: ogLocale.replace("_", "-"),
        isPartOf: { "@id": `${canonical}#website` },
        about: { "@id": `${canonical}#person` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: SEO_DEFAULTS.ogImage,
        },
      },
      {
        "@type": "Person",
        "@id": `${canonical}#person`,
        name: site.fullName,
        alternateName: SEO_DEFAULTS.siteName,
        url: canonical,
        email: `mailto:${site.email}`,
        image: SEO_DEFAULTS.ogImage,
        jobTitle: site.title,
        description: site.tagline,
        address: {
          "@type": "PostalAddress",
          addressCountry: site.location,
        },
        sameAs: SEO_DEFAULTS.sameAs,
        knowsAbout: SEO_DEFAULTS.knowsAbout,
      },
    ],
  }

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    canonical,
    locale,
    ogTitle: seo.ogTitle,
    ogDescription: seo.ogDescription,
    ogLocale,
    ogImage: SEO_DEFAULTS.ogImage,
    siteName: SEO_DEFAULTS.siteName,
    author: SEO_DEFAULTS.author,
    jsonLd,
  }
}
