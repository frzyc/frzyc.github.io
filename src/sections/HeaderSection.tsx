import {
  GitHubIcon,
  LinkedInIcon,
  TwitchIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/components/SocialIcons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Gamepad2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const links = [
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/frzyc/',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    href: 'https://github.com/frzyc',
  },
  {
    icon: Gamepad2,
    label: 'itch.io',
    href: 'https://frzyc.itch.io/',
  },
  {
    icon: TwitterIcon,
    label: 'Twitter',
    href: 'https://twitter.com/frzyc',
  },
  {
    icon: YouTubeIcon,
    label: 'YouTube',
    href: 'https://www.youtube.com/@frzyc',
  },
  {
    icon: TwitchIcon,
    label: 'Twitch',
    href: 'https://www.youtube.com/@frzyc',
  },
] as const

const backspaceSpeed = 200
const typingSpeed = 300
const initialText = 'frzyc'
const newText = 'Fred'

type NameTarget = 'frzyc' | 'Fred'

function Name() {
  const [displayText, setDisplayText] = useState(initialText)
  const [target, setTarget] = useState<NameTarget>('frzyc')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(false)
  const [idle, setIdle] = useState(false)
  const initialSequenceStarted = useRef(false)

  const targetText = target === 'Fred' ? newText : initialText

  useEffect(() => {
    if (initialSequenceStarted.current) return

    const cursorTimer = window.setTimeout(() => setShowCursor(true), 1500)
    const deleteTimer = window.setTimeout(() => {
      initialSequenceStarted.current = true
      setTarget('Fred')
      setIsDeleting(true)
    }, 3000)

    return () => {
      clearTimeout(cursorTimer)
      clearTimeout(deleteTimer)
    }
  }, [])

  useEffect(() => {
    let timer = 0

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = window.setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1))
        }, backspaceSpeed)
      } else {
        setIsDeleting(false)
      }
    } else if (displayText.length < targetText.length) {
      const nextChar = targetText[displayText.length]
      timer = window.setTimeout(() => {
        setDisplayText((prev) => prev + nextChar)
      }, typingSpeed)
    } else if (displayText !== targetText) {
      setIsDeleting(true)
    } else if (!idle && initialSequenceStarted.current) {
      timer = window.setTimeout(() => {
        setShowCursor(false)
        setIdle(true)
      }, 1500)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, targetText, idle])

  const handleToggle = () => {
    if (!idle) return

    initialSequenceStarted.current = true
    const nextTarget: NameTarget = displayText === newText ? 'frzyc' : 'Fred'
    setTarget(nextTarget)
    setIsDeleting(true)
    setShowCursor(true)
    setIdle(false)
  }

  const isFredPhase =
    displayText.startsWith('F') ||
    (!isDeleting && displayText.length === 0 && target === 'Fred')

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={!idle}
      className={cn(
        'inline font-mono text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl',
        'border-0 bg-transparent p-0 align-baseline',
        isFredPhase ? 'text-syntax-keyword' : 'text-syntax-string',
        idle &&
          'cursor-pointer rounded-sm hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        !idle && 'cursor-default',
      )}
      aria-label={
        idle
          ? `Switch name between ${initialText} and ${newText}`
          : 'Name animation in progress'
      }
    >
      {displayText}
      {showCursor && (
        <span
          className="ml-0.5 inline-block w-[0.55em] h-[1em] bg-current align-middle animate-[blink_1s_steps(1,end)_infinite]"
          aria-hidden
        />
      )}
    </button>
  )
}

export default function HeaderSection() {
  return (
    <header id="fred" className="scroll-mt-24 space-y-8 animate-fade-in-up">
      <div className="space-y-4">
        <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
          <span className="font-normal not-italic">Hi, I&apos;m </span>
          <Name />
        </h1>
        <p className="font-mono text-base leading-relaxed sm:text-lg">
          <span className="text-syntax-keyword">$</span>{' '}
          <span className="text-foreground">whoami</span>
          <span className="text-syntax-comment"> // full-stack engineer</span>
        </p>
      </div>

      <p className="text-foreground/80 leading-relaxed text-lg sm:text-xl max-w-3xl">
        <span className="font-mono text-syntax-keyword">full-stack</span>{' '}
        engineer shipping product across web, mobile, and real-time systems.
        <span className="font-mono text-syntax-string">
          {' '}
          open-source creator
        </span>{' '}
        and{' '}
        <span className="font-mono text-syntax-keyword">community lead</span> of
        Genshin Optimizer;{' '}
        <span className="font-mono text-syntax-string">game developer</span>{' '}
        building personal titles and jam games. Focused on architecture,
        performance, and code that survives review.
      </p>

      <nav className="flex flex-wrap gap-2">
        {links.map(({ icon: Icon, label, href }) => (
          <Button key={label} variant="outline" size="sm" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon />
              {label}
            </a>
          </Button>
        ))}
      </nav>
    </header>
  )
}
