/** Path aset statis di `public/` — `?v=` diisi saat build (lihat vite.config.ts) */
const assetQuery =
  typeof __ASSET_CACHE_VERSION__ !== "undefined"
    ? `?v=${__ASSET_CACHE_VERSION__}`
    : ""

export const publicAssets = {
  profile: `/img/profile.png${assetQuery}`,
  resume: "/resume/resume.pdf",
  certificates: {
    cer1: "/certificates/cer-1.png",
  },
} as const
