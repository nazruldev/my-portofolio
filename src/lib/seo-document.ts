type MetaAttr = "name" | "property"

function upsertMeta(attr: MetaAttr, key: string, content: string) {
  if (!content) return
  const selector = `meta[${attr}="${key}"]`
  let el = document.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  const parts = Object.entries(extra ?? {})
    .map(([k, v]) => `[${k}="${v}"]`)
    .join("")
  const selector = `link[rel="${rel}"]${parts}`
  let el = document.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement("link")
    el.rel = rel
    for (const [k, v] of Object.entries(extra ?? {})) {
      el.setAttribute(k, v)
    }
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(id: string, data: object) {
  const selector = `script[data-seo-jsonld="${id}"]`
  let el = document.querySelector<HTMLScriptElement>(selector)
  if (!el) {
    el = document.createElement("script")
    el.type = "application/ld+json"
    el.setAttribute("data-seo-jsonld", id)
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export type PageSeo = {
  title: string
  description: string
  keywords: string
  canonical: string
  locale: "en" | "id"
  ogTitle: string
  ogDescription: string
  ogLocale: string
  ogImage: string
  siteName: string
  author: string
  jsonLd: object
}

export function applyPageSeo(seo: PageSeo) {
  document.title = seo.title
  document.documentElement.lang = seo.locale

  upsertMeta("name", "description", seo.description)
  upsertMeta("name", "keywords", seo.keywords)
  upsertMeta("name", "author", seo.author)
  upsertMeta("name", "robots", "index, follow, max-image-preview:large")
  upsertMeta("name", "googlebot", "index, follow")

  upsertLink("canonical", seo.canonical)

  upsertMeta("property", "og:type", "website")
  upsertMeta("property", "og:site_name", seo.siteName)
  upsertMeta("property", "og:url", seo.canonical)
  upsertMeta("property", "og:title", seo.ogTitle)
  upsertMeta("property", "og:description", seo.ogDescription)
  upsertMeta("property", "og:locale", seo.ogLocale)
  upsertMeta("property", "og:image", seo.ogImage)
  upsertMeta("property", "og:image:alt", `${seo.author} — ${seo.ogTitle}`)

  upsertMeta("name", "twitter:card", "summary_large_image")
  upsertMeta("name", "twitter:title", seo.ogTitle)
  upsertMeta("name", "twitter:description", seo.ogDescription)
  upsertMeta("name", "twitter:image", seo.ogImage)

  for (const lang of ["en", "id"] as const) {
    upsertLink("alternate", seo.canonical, { hreflang: lang })
  }
  upsertLink("alternate", seo.canonical, { hreflang: "x-default" })

  upsertJsonLd("portfolio", seo.jsonLd)
}
