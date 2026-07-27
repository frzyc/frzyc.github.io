import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

const games = [
  {
    id: 'no-mans-land',
    title: "No Mine's Land",
    href: 'https://frzyc.itch.io/no-mans-land',
    embed: 'https://itch.io/embed/4674398',
    status: 'In progress',
    blurb:
      'A minesweeper roguelike — my current project. Clear boards, push deeper, survive the mines.',
  },
  {
    id: 'slack-inc',
    title: 'Slack Inc',
    href: 'https://frzyc.itch.io/slack-inc',
    embed: 'https://itch.io/embed/4696317',
    status: 'Juniper Dev Game Jam',
    theme: 'Spin to Win',
    blurb:
      'Corporate incremental swivel-chair auto-battler. Built for the Juniper Dev Game Jam.',
  },
  {
    id: 't-minus',
    title: 'T-Minus',
    href: 'https://frzyc.itch.io/t-minus',
    embed: 'https://itch.io/embed/4815929',
    status: 'GMTK 2026',
    theme: 'Countdown',
    blurb:
      'Figure out how a strange machine works before the timer runs out. Puzzle jam entry for GMTK 2026.',
  },
] as const

const darkEmbed = {
  dark: 'true',
  bg_color: '1a1816',
  fg_color: 'fafaf9',
  link_color: '5eead4',
  border_color: '4a4541',
} as const

const lightEmbed = {
  bg_color: 'f8f5f0',
  fg_color: '14110f',
  link_color: '0d6b63',
  border_color: 'c9c0b4',
} as const

function useIsDark() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    const sync = () => setDark(root.classList.contains('dark'))
    sync()
    const observer = new MutationObserver(sync)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return dark
}

function themedEmbedUrl(base: string, dark: boolean) {
  const url = new URL(base)
  const params = dark ? darkEmbed : lightEmbed
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value)
  }
  return url.toString()
}

function ItchEmbed({
  src,
  title,
  href,
  dark,
}: {
  src: string
  title: string
  href: string
  dark: boolean
}) {
  const themedSrc = themedEmbedUrl(src, dark)

  return (
    <div className="w-full max-w-[552px] overflow-hidden rounded-md">
      <iframe
        key={themedSrc}
        src={themedSrc}
        title={title}
        loading="lazy"
        className="block h-[167px] w-full max-w-[552px] border-0"
      >
        <a href={href}>{title} by frzyc</a>
      </iframe>
    </div>
  )
}

export default function GamesSection() {
  const dark = useIsDark()

  return (
    <section id="games" className="animate-fade-in-up scroll-mt-24 space-y-8">
      <div className="space-y-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            Game Development
          </h2>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://frzyc.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink />
              itch.io
            </a>
          </Button>
        </div>
        <p className="text-foreground/80 leading-relaxed max-w-2xl">
          Personal and jam games — prototypes, experiments. Made for fun, with
          Godot. swivel chair.
        </p>
      </div>

      <ul className="space-y-10">
        {games.map((game) => (
          <li key={game.id} className="space-y-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight">
                  <a
                    href={game.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary underline-offset-4 hover:underline"
                  >
                    {game.title}
                  </a>
                </h3>
                <span className="font-mono text-xs text-syntax-comment">
                  {game.status}
                </span>
              </div>
              {'theme' in game && game.theme && (
                <p className="font-mono text-sm">
                  <span className="text-syntax-comment">theme:</span>{' '}
                  <span className="text-syntax-string">"{game.theme}"</span>
                </p>
              )}
              <p className="text-foreground/80 leading-relaxed">{game.blurb}</p>
            </div>
            <ItchEmbed
              src={game.embed}
              title={game.title}
              href={game.href}
              dark={dark}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
