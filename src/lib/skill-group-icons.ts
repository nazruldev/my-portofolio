import type { SkillGroupId } from "@/data/portfolio.types"

const icons: Record<SkillGroupId, string> = {
  js: "⚡",
  python: "🐍",
  php: "🐘",
  css: "🎨",
  db: "🗄️",
  server: "🛠️",
}

export function skillGroupIcon(groupId: SkillGroupId) {
  return icons[groupId] ?? "📦"
}
