import { useEffect } from "react"
import { useLocale } from "@/i18n"
import { buildPageSeo } from "@/lib/build-page-seo"
import { applyPageSeo } from "@/lib/seo-document"

export function SeoHead() {
  const { locale, content } = useLocale()

  useEffect(() => {
    applyPageSeo(buildPageSeo(locale, content))
  }, [locale, content])

  return null
}
