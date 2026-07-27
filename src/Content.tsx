import Footer from './sections/Footer'
import GOSection from './sections/GOSection'
import GamesSection from './sections/GamesSection'
import HeaderSection from './sections/HeaderSection'
import ExperienceTimeline from './sections/ExperienceTimeline'
import { BlobBackground } from '@/components/BlobBackground'
import { QuickNav } from '@/components/QuickNav'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Separator } from '@/components/ui/separator'

export default function Content() {
  return (
    <div className="relative isolate min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <BlobBackground />
      </div>

      <div className="fixed top-4 right-4 z-20 flex flex-col items-end gap-0.5 rounded-lg border border-border/60 bg-background/85 p-1.5 shadow-sm backdrop-blur-md lg:hidden">
        <ThemeToggle />
        <QuickNav align="end" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl justify-center gap-3 px-6 py-16 sm:px-8 sm:py-24 lg:gap-4">
        <div className="min-w-0 w-full max-w-5xl space-y-20 rounded-2xl border border-border/60 bg-background/72 px-6 py-12 shadow-sm backdrop-blur-md sm:px-10 sm:py-16">
          <HeaderSection />
          <GOSection />
          <Separator />
          <GamesSection />
          <Separator />
          <ExperienceTimeline />
          <Footer />
        </div>

        {/* Desktop: controls hug the column */}
        <div className="sticky top-6 hidden shrink-0 self-start lg:flex flex-col items-start gap-2 pt-1">
          <ThemeToggle />
          <QuickNav />
        </div>
      </div>
    </div>
  )
}
