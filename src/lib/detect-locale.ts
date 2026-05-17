import type { Locale } from "@/data/portfolio.types"

export const LOCALE_STORAGE_KEY = "locale"
const LOCALE_USER_PICKED_KEY = "locale-user-picked"

/** Zona waktu umum di Indonesia */
const INDONESIA_TIMEZONES = new Set([
  "Asia/Jakarta",
  "Asia/Pontianak",
  "Asia/Makassar",
  "Asia/Jayapura",
])

export function hasUserLocalePreference(): boolean {
  return localStorage.getItem(LOCALE_USER_PICKED_KEY) === "1"
}

export function readUserLocale(): Locale | null {
  if (!hasUserLocalePreference()) return null
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  return stored === "id" || stored === "en" ? stored : null
}

export function persistUserLocale(locale: Locale) {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  localStorage.setItem(LOCALE_USER_PICKED_KEY, "1")
}

function isIndonesiaTimezone(): boolean {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    return INDONESIA_TIMEZONES.has(tz)
  } catch {
    return false
  }
}

function isIndonesianBrowserLanguage(): boolean {
  const langs = [navigator.language, ...(navigator.languages ?? [])]
  return langs.some((l) => {
    const code = l.toLowerCase()
    return code === "id" || code.startsWith("id-")
  })
}

/** Deteksi sinkron — dipakai sebelum paint (tanpa API) */
export function detectLocaleSync(): Locale {
  if (isIndonesiaTimezone() || isIndonesianBrowserLanguage()) return "id"
  return "en"
}

/** Deteksi berdasarkan negara (IP) — hanya jika belum pilih bahasa manual */
export async function detectLocaleFromGeo(): Promise<Locale | null> {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 2500)

  try {
    const res = await fetch("https://get.geojs.io/v1/ip/country.json", {
      signal: controller.signal,
    })
    if (!res.ok) return null

    const data = (await res.json()) as { country?: string }
    const code = data.country?.toUpperCase()
    if (code === "ID") return "id"
    if (code) return "en"
    return null
  } catch {
    return null
  } finally {
    window.clearTimeout(timeout)
  }
}

export function resolveInitialLocale(): Locale {
  return readUserLocale() ?? detectLocaleSync()
}
