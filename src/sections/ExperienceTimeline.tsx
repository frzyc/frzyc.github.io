import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'

import { ExperienceEntry } from '@/components/ExperienceEntry'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import solink from '@/sections/solink.png'

function YelpLogo() {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden>
      <path
        fill="#FF1A1A"
        d="M 3.457031 11.554688 C 3.074219 12.179688 2.914062 14.144531 3.046875 15.453125 C 3.09375 15.882812 3.167969 16.242188 3.28125 16.457031 C 3.433594 16.753906 3.691406 16.929688 3.984375 16.941406 C 4.175781 16.949219 4.292969 16.917969 7.839844 15.757812 C 7.839844 15.757812 9.414062 15.25 9.421875 15.246094 C 9.8125 15.144531 10.078125 14.777344 10.105469 14.308594 C 10.128906 13.828125 9.882812 13.402344 9.480469 13.25 C 9.480469 13.25 8.371094 12.789062 8.367188 12.789062 C 4.558594 11.191406 4.386719 11.128906 4.195312 11.125 C 3.902344 11.117188 3.640625 11.265625 3.457031 11.554688 Z M 11.984375 23.453125 C 12.042969 23.269531 12.050781 23.144531 12.0625 19.359375 C 12.0625 19.359375 12.070312 17.6875 12.070312 17.671875 C 12.097656 17.261719 11.835938 16.890625 11.40625 16.722656 C 10.96875 16.550781 10.496094 16.65625 10.230469 16.992188 C 10.230469 16.992188 9.453125 17.929688 9.449219 17.929688 C 6.777344 21.117188 6.667969 21.261719 6.601562 21.453125 C 6.5625 21.5625 6.546875 21.679688 6.5625 21.800781 C 6.578125 21.96875 6.652344 22.136719 6.777344 22.289062 C 7.394531 23.039062 10.363281 24.148438 11.3125 23.984375 C 11.640625 23.921875 11.878906 23.734375 11.984375 23.453125 Z M 18.003906 22.136719 C 18.898438 21.773438 20.851562 19.25 20.988281 18.277344 C 21.035156 17.941406 20.933594 17.648438 20.703125 17.464844 C 20.554688 17.347656 20.4375 17.304688 16.894531 16.121094 C 16.894531 16.121094 15.339844 15.601562 15.320312 15.589844 C 14.945312 15.441406 14.515625 15.578125 14.226562 15.941406 C 13.925781 16.3125 13.878906 16.800781 14.117188 17.171875 L 14.746094 18.207031 C 16.847656 21.679688 17.007812 21.925781 17.160156 22.042969 C 17.394531 22.230469 17.691406 22.261719 18.003906 22.136719 Z M 16.171875 13.199219 C 20.199219 12.207031 20.355469 12.15625 20.515625 12.050781 C 20.757812 11.882812 20.882812 11.605469 20.859375 11.261719 C 20.859375 11.25 20.863281 11.242188 20.859375 11.230469 C 20.757812 10.226562 19.023438 7.609375 18.171875 7.1875 C 17.867188 7.039062 17.566406 7.050781 17.316406 7.21875 C 17.160156 7.324219 17.042969 7.480469 14.886719 10.472656 C 14.886719 10.472656 13.914062 11.824219 13.902344 11.835938 C 13.644531 12.152344 13.644531 12.609375 13.890625 13 C 14.152344 13.402344 14.589844 13.597656 14.996094 13.484375 C 14.996094 13.484375 14.976562 13.515625 14.972656 13.519531 C 15.171875 13.441406 15.527344 13.355469 16.171875 13.199219 Z M 12.128906 9.820312 C 12.0625 8.199219 11.582031 0.980469 11.523438 0.644531 C 11.441406 0.339844 11.210938 0.125 10.875 0.0390625 C 9.847656 -0.222656 5.917969 0.898438 5.1875 1.660156 C 4.957031 1.910156 4.867188 2.214844 4.9375 2.484375 C 5.050781 2.726562 9.921875 10.507812 9.921875 10.507812 C 10.640625 11.691406 11.230469 11.507812 11.421875 11.449219 C 11.613281 11.386719 12.195312 11.203125 12.128906 9.820312 Z"
      />
    </svg>
  )
}

function BlackBerryLogo() {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden>
      <path
        fill="currentColor"
        d="M 8.4375 16.03125 L 7.613281 19.929688 L 10.6875 19.929688 C 13.039062 19.929688 13.753906 18.777344 13.753906 17.734375 C 13.753906 16.96875 13.320312 16.03125 11.398438 16.03125 Z M 16.769531 13.621094 L 15.957031 17.511719 L 19.03125 17.511719 C 21.371094 17.511719 22.09375 16.414062 22.09375 15.316406 C 22.09375 14.550781 21.652344 13.621094 19.742188 13.621094 Z M 9.589844 9.9375 L 8.71875 13.835938 L 11.785156 13.835938 C 14.191406 13.835938 14.914062 12.683594 14.914062 11.644531 C 14.914062 10.875 14.472656 9.9375 12.554688 9.9375 L 9.582031 9.9375 Z M 1.578125 9.9375 L 0.753906 13.835938 L 3.828125 13.835938 C 6.234375 13.835938 6.902344 12.683594 6.902344 11.644531 C 6.902344 10.875 6.460938 9.9375 4.539062 9.9375 Z M 17.921875 7.527344 L 17.050781 11.429688 L 20.125 11.429688 C 22.535156 11.429688 23.246094 10.332031 23.246094 9.234375 C 23.246094 8.464844 22.808594 7.527344 20.902344 7.527344 Z M 10.632812 4.070312 L 9.808594 7.96875 L 12.882812 7.96875 C 15.28125 7.96875 15.957031 6.816406 15.957031 5.777344 C 15.957031 5.007812 15.515625 4.070312 13.59375 4.070312 Z M 2.675781 4.070312 L 1.847656 7.96875 L 4.921875 7.96875 C 7.285156 7.96875 7.996094 6.816406 7.996094 5.777344 C 7.996094 5.007812 7.558594 4.070312 5.636719 4.070312 Z"
      />
    </svg>
  )
}

type Experience = {
  id: string
  label: string
  year: string
  logo?: ReactNode
  company: string
  title: string
  dates: string
  summary?: string
  bullets?: string[]
  tech?: string[]
}

/** Reverse chronological: newest → oldest */
const experiences: Experience[] = [
  {
    id: 'solink',
    label: 'Solink',
    year: '2025',
    logo: (
      <img
        src={solink}
        alt="Solink"
        width={24}
        height={24}
        className="rounded-sm"
      />
    ),
    company: 'Solink — Hybrid',
    title: 'Senior Full-stack Engineer',
    dates: '2025 Apr – 2026 May',
    summary:
      "Tech lead for Solink's flagship React Native application, spanning mobile video, web platform delivery, and pipeline reliability.",
    bullets: [
      'Led architecture, performance, and code quality for the flagship React Native app on iOS and Android.',
      'Built and optimized HLS and WebRTC video streaming, improving playback reliability and latency.',
      'Shipped full-stack features with React, TypeScript, and backend services for real-time video workflows.',
      'Ran sprint execution for the primary web platform and coordinated cross-team delivery.',
      'Triaged end-to-end video pipeline issues and drove architectural fixes for systemic failures.',
      'Introduced AI-assisted development workflows with structured context and strict review standards.',
    ],
    tech: [
      'React Native',
      'React',
      'TypeScript',
      'HLS',
      'WebRTC',
      'Full-stack',
    ],
  },
  {
    id: 'yelp',
    label: 'Yelp',
    year: '2023',
    logo: <YelpLogo />,
    company: 'Yelp — Remote',
    title: 'Full-stack Engineer',
    dates: '2023 Jan – 2024 Feb',
    summary:
      'Worked on SEO infrastructure, backend microservices, and frontend monorepo systems at scale.',
    bullets: [
      'Ran SEO experiments and metadata frameworks that improved organic traffic and search visibility.',
      'Built and maintained React, TypeScript, and Python microservices in a frontend monorepo.',
      'Implemented GraphQL data pipelines for metadata and structured content.',
      'Optimized structured data and internal links with verified traffic and engagement gains.',
      'Dark-launched complex SEO refactors via experimentation logging to verify logic parity.',
      'Designed logging to capture crawler page data and improve the internal SEO graph.',
    ],
    tech: ['SEO', 'TypeScript', 'Python', 'React', 'SSR', 'GraphQL'],
  },
  {
    id: 'blackberry',
    label: 'BlackBerry',
    year: '2017',
    logo: <BlackBerryLogo />,
    company: 'BlackBerry (RIM) — Ottawa',
    title: 'Software Developer',
    dates: '2017 May – 2022 Dec',
    summary:
      'Contributed to automotive software, fleet management, and mobile platform instrumentation.',
    bullets: [
      'Developed the IVY vehicle software platform in C++ on QNX for in-vehicle systems.',
      'Designed end-to-end automated test suites for IVY using Python and Pytest.',
      'Built a cloud fleet management console with React, Elasticsearch, Express, and Docker.',
      'Wrote IPC benchmarks and performance analysis for QNX in C/C++.',
      'Instrumented AOSP and maintained a telemetry Android app in Java, Kotlin, and C++.',
    ],
    tech: ['QNX', 'C++', 'Python', 'AOSP', 'React', 'Full-stack'],
  },
  {
    id: 'uoft',
    label: 'UofT',
    year: '2012',
    logo: <GraduationCap className="size-6 text-foreground/70" />,
    company: 'University of Toronto',
    title: 'Bachelor of Applied Science',
    dates: '2012 Sept – 2017 Apr',
    summary: 'Minor in Engineering Business.',
  },
]

export default function ExperienceTimeline() {
  const last = experiences.length - 1
  const [index, setIndex] = useState(0)
  const active = experiences[index]

  const goPrev = () => setIndex((i) => Math.max(0, i - 1))
  const goNext = () => setIndex((i) => Math.min(last, i + 1))

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="experience" className="scroll-mt-24 space-y-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
      </div>

      {/* Horizontal timeline + edge nav */}
      <div className="relative px-1 pt-2 pb-1">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={goPrev}
          disabled={index === 0}
          aria-label="Previous role"
          className={cn(
            'absolute z-10 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full',
            'top-[1.15rem] -left-6 sm:-left-10',
            'border-border/80 bg-background/90 shadow-sm backdrop-blur-sm',
            'hover:bg-accent hover:text-accent-foreground',
            'disabled:opacity-30',
          )}
        >
          <ChevronLeft className="size-5" />
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={goNext}
          disabled={index === last}
          aria-label="Next role"
          className={cn(
            'absolute z-10 size-10 translate-x-1/2 -translate-y-1/2 rounded-full',
            'top-[1.15rem] -right-6 sm:-right-10',
            'border-border/80 bg-background/90 shadow-sm backdrop-blur-sm',
            'hover:bg-accent hover:text-accent-foreground',
            'disabled:opacity-30',
          )}
        >
          <ChevronRight className="size-5" />
        </Button>

        <div
          className="absolute left-[12.5%] right-[12.5%] top-[1.15rem] h-px bg-border"
          aria-hidden
        />
        <div
          className="absolute left-[12.5%] top-[1.15rem] h-px bg-primary transition-[width] duration-300 ease-out"
          style={{
            width: `calc(${(index / last) * 75}% )`,
          }}
          aria-hidden
        />
        <ol className="relative grid grid-cols-4">
          {experiences.map((exp, i) => {
            const selected = i === index
            const passed = i <= index
            return (
              <li key={exp.id} className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className={cn(
                    'group flex flex-col items-center gap-2 rounded-md px-2 py-1 text-center',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  )}
                  aria-current={selected ? 'step' : undefined}
                  aria-label={`${exp.label}, ${exp.dates}`}
                >
                  <span
                    className={cn(
                      'relative z-[1] size-3.5 rounded-full border-2 transition-colors',
                      selected
                        ? 'border-primary bg-primary'
                        : passed
                          ? 'border-primary bg-background'
                          : 'border-border bg-background group-hover:border-foreground/40',
                    )}
                  />
                  <span
                    className={cn(
                      'font-mono text-xs transition-colors',
                      selected
                        ? 'text-primary'
                        : 'text-foreground/50 group-hover:text-foreground/80',
                    )}
                  >
                    {exp.year}
                  </span>
                  <span
                    className={cn(
                      'text-sm font-medium transition-colors',
                      selected
                        ? 'text-foreground'
                        : 'text-foreground/55 group-hover:text-foreground/85',
                    )}
                  >
                    {exp.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      <p className="font-mono text-xs text-foreground/45 text-center">
        {index + 1} / {experiences.length}
        <span className="hidden sm:inline"> · use timeline or arrow keys</span>
      </p>

      <div
        key={active.id}
        className="animate-fade-in-up min-h-[22rem]"
        role="region"
        aria-live="polite"
        aria-label={`${active.company} details`}
      >
        <ExperienceEntry
          logo={active.logo}
          company={active.company}
          title={active.title}
          dates={active.dates}
          summary={active.summary}
          bullets={active.bullets ?? []}
          tech={active.tech}
        />
      </div>
    </section>
  )
}
