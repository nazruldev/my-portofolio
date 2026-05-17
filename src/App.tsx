import { lazy, Suspense } from "react"
import { Hero } from "@/components/sections/Hero"
import { Footer } from "@/components/sections/Footer"
import { BackToTop } from "@/components/layout/BackToTop"
import {
  ContactDialog,
  useContactDialog,
} from "@/components/layout/ContactDialog"
import { Navbar } from "@/components/layout/Navbar"
import { Preloader } from "@/components/layout/Preloader"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import { TechMarquee } from "@/components/shared/TechMarquee"
import { SeoHead } from "@/components/seo/SeoHead"
import { LocaleProvider, usePortfolio } from "@/data/portfolio"

const About = lazy(() =>
  import("@/components/sections/About").then((m) => ({ default: m.About }))
)
const Skills = lazy(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills }))
)
const Projects = lazy(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects }))
)
const Certificates = lazy(() =>
  import("@/components/sections/Certificates").then((m) => ({
    default: m.Certificates,
  }))
)
const Experience = lazy(() =>
  import("@/components/sections/Experience").then((m) => ({
    default: m.Experience,
  }))
)
const Education = lazy(() =>
  import("@/components/sections/Education").then((m) => ({
    default: m.Education,
  }))
)

function SectionFallback() {
  return <div className="min-h-[12rem]" aria-hidden />
}

function AppContent() {
  const { open, setOpen } = useContactDialog()
  const { ui } = usePortfolio()

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {ui.skipToContent}
      </a>

      <Preloader />
      <ScrollProgress />
      <Navbar />

      <main id="main-content">
        <Hero onContact={() => setOpen(true)} />
        <TechMarquee />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Experience />
          <Education />
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
      <ContactDialog open={open} onOpenChange={setOpen} />
    </>
  )
}

function App() {
  return (
    <LocaleProvider>
      <SeoHead />
      <AppContent />
    </LocaleProvider>
  )
}

export default App
