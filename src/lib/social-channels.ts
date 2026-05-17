import type { PortfolioContent } from "@/data/portfolio.types"
import {
  DiscordIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/icons/SocialIcons"

export type SocialChannel = {
  id: keyof PortfolioContent["site"]["social"]
  href: string
  label: string
  Icon: typeof GitHubIcon
}

const channelMeta: Omit<SocialChannel, "href">[] = [
  { id: "github", label: "GitHub", Icon: GitHubIcon },
  { id: "linkedin", label: "LinkedIn", Icon: LinkedInIcon },
  { id: "whatsapp", label: "WhatsApp", Icon: WhatsAppIcon },
  { id: "telegram", label: "Telegram", Icon: TelegramIcon },
  { id: "discord", label: "Discord", Icon: DiscordIcon },
  { id: "facebook", label: "Facebook", Icon: FacebookIcon },
]

export function getSocialChannels(
  social: PortfolioContent["site"]["social"]
): SocialChannel[] {
  return channelMeta
    .map((meta) => ({ ...meta, href: social[meta.id] }))
    .filter((ch) => Boolean(ch.href?.trim()))
}

/** WhatsApp, Telegram, Discord, Facebook — untuk dialog kontak */
export function getContactChannels(
  social: PortfolioContent["site"]["social"]
): SocialChannel[] {
  const ids = ["whatsapp", "telegram", "discord", "facebook"] as const
  return getSocialChannels(social).filter((ch) =>
    ids.includes(ch.id as (typeof ids)[number])
  )
}
