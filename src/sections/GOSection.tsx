import { ChevronDown, ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { CodeChip } from '@/components/CodeChip'
import { GitHubIcon } from '@/components/SocialIcons'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import home from './goimg/home.png'
import stats from './goimg/stats.png'
import up from './goimg/up.png'

const slides = [
  { src: home, alt: 'Genshin Optimizer home screen' },
  { src: stats, alt: 'Genshin Optimizer stats view' },
  { src: up, alt: 'Genshin Optimizer upgrade view' },
] as const

function Gallery() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(0)

  const advance = () => {
    setIndex((i) => (i + 1) % slides.length)
  }

  useEffect(() => {
    timerRef.current = window.setInterval(advance, 4000)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className="space-y-3">
      <button
        type="button"
        className="relative block w-full overflow-hidden rounded-lg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        onClick={() => {
          advance()
          clearInterval(timerRef.current)
        }}
        aria-label="Cycle project screenshots"
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.alt}
              src={slide.src}
              alt={slide.alt}
              className="h-auto w-full min-w-full shrink-0 object-cover object-top"
            />
          ))}
        </div>
      </button>
      <div className="flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.alt}
            type="button"
            aria-label={`Show screenshot ${i + 1}`}
            aria-current={i === index}
            className={cn(
              'h-1.5 w-1.5 rounded-full transition-colors',
              i === index
                ? 'bg-primary'
                : 'bg-foreground/25 hover:bg-foreground/40',
            )}
            onClick={() => {
              setIndex(i)
              clearInterval(timerRef.current)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function GOSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="project" className="animate-fade-in-up scroll-mt-24 space-y-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight">Project</h2>
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-semibold tracking-tight">
              Genshin Optimizer
            </h3>
            <span className="font-mono text-sm text-foreground/60">
              2020 – present
            </span>
          </div>
          <p className="mt-1 text-foreground/75">
            Creator and lead developer of an open-source build optimizer for
            Genshin Impact.
          </p>
        </div>
      </div>

      <p className="text-base leading-relaxed text-foreground/80">
        Started in late 2020 to solve inventory RNG and character build
        optimization. Today it is a community hub for theorycrafters and
        developers, with a global team shipping features across the Genshin
        ecosystem.
      </p>

      <div className="flex flex-wrap gap-2">
        <CodeChip>~1M monthly views</CodeChip>
        <CodeChip>~30k daily users</CodeChip>
        <CodeChip>14k+ Discord members</CodeChip>
      </div>

      <Gallery />

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" asChild>
          <a
            href="https://frzyc.github.io/genshin-optimizer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink />
            Live site
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href="https://github.com/frzyc/genshin-optimizer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            GitHub
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href="https://discord.gg/CXUbQXyfUs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </Button>
      </div>

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="font-mono text-sm text-foreground/65 hover:text-foreground"
          >
            <ChevronDown
              className={cn('transition-transform', open && 'rotate-180')}
            />
            {open ? 'collapse' : 'expand'} story & features
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-6 pt-4">
          <div className="space-y-3 text-base leading-relaxed text-foreground/80">
            <p>
              Within a year, GO became a go-to resource for players optimizing
              their accounts. I grew from solo maintainer into project lead,
              coordinating developers across time zones and partnering with
              theorycraft communities for feedback and feature scoping.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-syntax-comment font-mono">-</span>
                <span>
                  Lead a global contributor team and onboard new developers
                  through scoped open-source projects.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-syntax-comment font-mono">-</span>
                <span>
                  Collaborate with community designers on Figma for UI/UX
                  iteration.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-syntax-comment font-mono">-</span>
                <span>
                  Produce tutorials and feature showcases on YouTube and Twitch.
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-2 text-base leading-relaxed">
            <h3 className="font-medium text-foreground">Notable features</h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex gap-2">
                <span className="text-syntax-comment font-mono">-</span>
                <span>Inventory tracking and artifact management</span>
              </li>
              <li className="flex gap-2">
                <span className="text-syntax-comment font-mono">-</span>
                <span>
                  Screenshot scanner using{' '}
                  <span className="text-syntax-keyword">Tesseract.js</span>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-syntax-comment font-mono">-</span>
                <span>AST-based formula system for damage calculations</span>
              </li>
              <li className="flex gap-2">
                <span className="text-syntax-comment font-mono">-</span>
                <span>
                  Build generation across hundreds of thousands of inventory
                  combinations
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-syntax-comment font-mono">-</span>
                <span>
                  Predictive upgrade model for gear investment decisions
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-base font-medium">Project story</h3>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/D7fKDlop-7w?si=Wr1jQ_m-IiwX8Vgd"
                title="The Story of Genshin Optimizer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <p className="font-mono text-sm text-foreground/65">
        <span className="text-syntax-keyword">TypeScript</span> ·{' '}
        <span className="text-syntax-keyword">React</span> · open source
      </p>
    </section>
  )
}
