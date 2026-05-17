import { useCallback, useEffect, useState } from "react"
import {
  applyThemeClass,
  readStoredTheme,
  resolveTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => resolveTheme(readStoredTheme()))

  useEffect(() => {
    applyThemeClass(theme)
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === "light" ? "dark" : "light"))
  }, [])

  return { theme, toggle }
}
