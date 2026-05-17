import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { usePortfolio } from "@/i18n"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { ui } = usePortfolio()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      aria-label={ui.toggleTheme}
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}
