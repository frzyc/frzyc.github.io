import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export function ExperienceEntry({
  logo,
  company,
  title,
  dates,
  summary,
  bullets,
  tech,
  className,
}: {
  logo?: ReactNode
  company: string
  title: string
  dates: string
  summary?: string
  bullets: string[]
  tech?: string[]
  className?: string
}) {
  return (
    <section className={cn('animate-fade-in-up', className)}>
      <div className="flex items-start gap-3 mb-4">
        {logo && <div className="mt-0.5 shrink-0">{logo}</div>}
        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-tight">{company}</h3>
          <p className="text-foreground/75">{title}</p>
        </div>
        <p className="ml-auto shrink-0 font-mono text-sm text-foreground/60 pt-1">
          {dates}
        </p>
      </div>
      {summary && (
        <p className="text-foreground/80 leading-relaxed mb-4">{summary}</p>
      )}
      {bullets.length > 0 && (
        <ul className="space-y-2.5 text-base leading-relaxed">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="text-syntax-comment font-mono select-none">
                -
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {tech && tech.length > 0 && (
        <p className="mt-4 font-mono text-sm text-foreground/65">
          {tech.map((t, i) => (
            <span key={t}>
              <span className="text-syntax-keyword">{t}</span>
              {i < tech.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
      )}
    </section>
  )
}
