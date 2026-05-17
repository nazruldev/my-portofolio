import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import type { Locale, PortfolioContent } from "@/data/portfolio.types"
import { buildPortfolio } from "@/i18n/merge-portfolio"

const STORAGE_KEY = "locale"

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  content: PortfolioContent
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readStoredLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === "id" || stored === "en") return stored
  return navigator.language.toLowerCase().startsWith("id") ? "id" : "en"
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
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
