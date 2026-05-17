export const THEME_STORAGE_KEY = "theme"

export type Theme = "light" | "dark"

export function readStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return stored === "light" || stored === "dark" ? stored : null
}

export function resolveTheme(stored: Theme | null): Theme {
  return stored ?? "dark"
}

/** Dipanggil sebelum React mount — cegah flash tema salah */
export function applyThemeClass(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
}

export function initThemeFromStorage() {
  applyThemeClass(resolveTheme(readStoredTheme()))
}
