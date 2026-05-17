/** URL ikon dari Devicon CDN */
export function deviconUrl(icon: string) {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`
}

export function parsePercentage(value: string) {
  return Number.parseInt(value.replace("%", ""), 10) || 0
}
