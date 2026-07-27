export default function Footer() {
  return (
    <footer className="pt-4 font-mono text-sm text-foreground/65">
      <p>
        <span className="text-syntax-comment">//</span> built with{' '}
        <span className="text-syntax-keyword">vite</span>, with{' '}
        <span className="text-syntax-keyword">shadcn</span>
      </p>
      <a
        href="https://github.com/frzyc/frzyc.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline underline-offset-4"
      >
        source
      </a>
    </footer>
  )
}
