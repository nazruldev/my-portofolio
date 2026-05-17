import { cn } from "@/lib/utils"

type HeroProfileProps = {
  src: string
  alt: string
  className?: string
}

export function HeroProfile({ src, alt, className }: HeroProfileProps) {
  return (
    <div
      className={cn(
        "hero-profile-photo relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:mx-0 lg:max-w-[min(100%,420px)]",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        width={420}
        height={560}
        decoding="async"
        fetchPriority="high"
        className="hero-profile-photo__img relative block h-auto w-full"
      />
    </div>
  )
}
