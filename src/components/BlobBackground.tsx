import { useEffect, useRef } from 'react'

const BLOB_COUNT = 5
const LERP_FOLLOW = 0.022
const LERP_WANDER = 0.008
const IDLE_MS = 2000
const WANDER_ARRIVE = 60
const MARGIN = 0.1

type Point = { x: number; y: number }

type BlobConfig = {
  size: number
  /** 0 = sticks to cursor; higher = trails more in follow mode */
  lag: number
  tone: 'primary' | 'secondary'
  opacity: number
}

const BLOBS: BlobConfig[] = [
  { size: 560, lag: 0, tone: 'primary', opacity: 0.95 },
  { size: 420, lag: 0.35, tone: 'secondary', opacity: 0.85 },
  { size: 480, lag: 0.55, tone: 'primary', opacity: 0.7 },
  { size: 360, lag: 0.7, tone: 'secondary', opacity: 0.75 },
  { size: 400, lag: 0.85, tone: 'primary', opacity: 0.55 },
]

function centerPoint(): Point {
  if (typeof window === 'undefined') return { x: 0, y: 0 }
  return { x: window.innerWidth / 2, y: window.innerHeight / 3 }
}

function randomPoint(): Point {
  const w = window.innerWidth
  const h = window.innerHeight
  return {
    x: w * MARGIN + Math.random() * w * (1 - MARGIN * 2),
    y: h * MARGIN + Math.random() * h * (1 - MARGIN * 2),
  }
}

function dist(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

export function BlobBackground() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const start = centerPoint()
    const positions = BLOBS.map(() => ({ ...start }))
    const targets = BLOBS.map(() => ({ ...start }))
    let mode: 'follow' | 'wander' = 'wander'
    let lastMove = 0
    let cursor = { ...start }
    let frame = 0

    const place = () => {
      positions.forEach((pos, i) => {
        const el = refs.current[i]
        if (!el) return
        const half = BLOBS[i].size / 2
        el.style.transform = `translate3d(${pos.x - half}px, ${pos.y - half}px, 0)`
      })
    }

    const scatter = () => {
      targets.forEach((t) => Object.assign(t, randomPoint()))
    }

    place()

    if (reducedMotion) {
      refs.current.forEach((el) => {
        if (el) el.style.opacity = '0'
      })
      return
    }

    scatter()

    const onMove = (event: MouseEvent) => {
      lastMove = performance.now()
      mode = 'follow'
      cursor = { x: event.clientX, y: event.clientY }
      // All seek the cursor; lag is applied via per-blob lerp damping below
      targets.forEach((t) => {
        t.x = cursor.x
        t.y = cursor.y
      })
    }

    const animate = (now: number) => {
      if (mode === 'follow' && now - lastMove > IDLE_MS) {
        mode = 'wander'
        scatter()
      }

      if (mode === 'wander') {
        targets.forEach((t, i) => {
          if (dist(positions[i], t) < WANDER_ARRIVE) {
            Object.assign(t, randomPoint())
          }
        })
      }

      const baseLerp = mode === 'follow' ? LERP_FOLLOW : LERP_WANDER

      positions.forEach((pos, i) => {
        // Follow: trailers move slower. Wander: all slow, lag unused for fairness.
        const lerp =
          mode === 'follow'
            ? baseLerp * (1 - BLOBS[i].lag * 0.75)
            : baseLerp * (0.7 + (i / BLOB_COUNT) * 0.5)

        pos.x += (targets[i].x - pos.x) * lerp
        pos.y += (targets[i].y - pos.y) * lerp
      })

      place()
      frame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  const start = centerPoint()

  return (
    <>
      <div className="absolute inset-0 bg-background" aria-hidden />
      <div className="dot-grid absolute inset-0" aria-hidden />
      {BLOBS.map((blob, i) => {
        const half = blob.size / 2
        return (
          <div
            key={i}
            ref={(el) => {
              refs.current[i] = el
            }}
            className={`blob blob-${blob.tone} absolute top-0 left-0 z-[1] rounded-full will-change-transform`}
            style={{
              width: blob.size,
              height: blob.size,
              opacity: blob.opacity,
              transform: `translate3d(${start.x - half}px, ${start.y - half}px, 0)`,
            }}
          />
        )
      })}
    </>
  )
}
