import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import type { Locale, PortfolioContent } from "@/data/portfolio.types"
import { buildPortfolio } from "@/i18n/merge-portfolio"
import {
  detectLocaleFromGeo,
  hasUserLocalePreference,
  persistUserLocale,
  resolveInitialLocale,
} from "@/lib/detect-locale"

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  content: PortfolioContent
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(resolveInitialLocale)

  useEffect(() => {
    if (hasUserLocalePreference()) return

    let cancelled = false
    detectLocaleFromGeo().then((geoLocale) => {
      if (cancelled || !geoLocale) return
      setLocaleState(geoLocale)
    })

    return () => {
      cancelled = true
    }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    persistUserLocale(next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "id" : "en")
  }, [locale, setLocale])

  const content = useMemo(() => buildPortfolio(locale), [locale])

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, content }),
    [locale, setLocale, toggleLocale, content]
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider")
  }
  return ctx
}

export function usePortfolio() {
  return useLocale().content
}
