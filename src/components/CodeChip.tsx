import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export function CodeChip({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-surface px-3 py-1.5 font-mono text-sm text-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}
