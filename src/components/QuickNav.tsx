import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { id: 'fred', label: 'Fred' },
  { id: 'project', label: 'Project' },
  { id: 'games', label: 'Game Dev' },
  { id: 'experience', label: 'Experience' },
] as const

const sectionIds = links.map((l) => l.id)

function sectionAtProbe(): string | null {
  const probe = window.innerHeight * 0.28
  let current: string | null = null

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    const { top, bottom } = el.getBoundingClientRect()
    if (top <= probe && bottom > probe) return id
    if (top <= probe) current = id
  }

  return current
}

function syncHash(id: string | null) {
  const next = id && id !== 'fred' ? `#${id}` : ''
  const path = `${window.location.pathname}${window.location.search}${next}`
  if (
    `${window.location.pathname}${window.location.search}${window.location.hash}` ===
    path
  ) {
    return
  }
  history.replaceState(null, '', path || window.location.pathname)
}

export function QuickNav({ align = 'start' }: { align?: 'start' | 'end' }) {
  const [active, setActive] = useState<string | null>(null)
  const ticking = useRef(false)

  useEffect(() => {
    const update = () => {
      const id = sectionAtProbe()
      setActive(id)
      syncHash(id)
      ticking.current = false
    }

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const goTop = () => {
    document.getElementById('fred')?.scrollIntoView({ behavior: 'smooth' })
    syncHash('fred')
  }

  return (
    <nav
      aria-label="Jump to section"
      className={cn(
        'flex flex-col gap-0.5',
        align === 'end' ? 'items-end' : 'items-start',
      )}
    >
      {links.map((link) => {
        const isActive = active === link.id
        const className = cn(
          'h-7 px-2 font-mono text-xs transition-colors hover:bg-transparent',
          isActive
            ? 'text-syntax-keyword hover:text-syntax-keyword'
            : 'text-syntax-comment hover:text-foreground',
        )

        if (link.id === 'fred') {
          return (
            <Button
              key={link.id}
              type="button"
              variant="ghost"
              size="sm"
              onClick={goTop}
              aria-current={isActive ? 'location' : undefined}
              className={className}
            >
              {link.label}
            </Button>
          )
        }

        return (
          <Button
            key={link.id}
            variant="ghost"
            size="sm"
            asChild
            className={className}
          >
            <a
              href={`#${link.id}`}
              aria-current={isActive ? 'location' : undefined}
            >
              {link.label}
            </a>
          </Button>
        )
      })}
    </nav>
  )
}
