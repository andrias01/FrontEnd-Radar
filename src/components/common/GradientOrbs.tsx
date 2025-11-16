export const GradientOrbs = () => {
  return (
    <div className="pointer-events-none" aria-hidden="true">
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[color:var(--color-primary)]/25 blur-3xl" />
      <div className="absolute right-32 top-10 h-64 w-64 rounded-full bg-[color:var(--color-secondary)]/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[color:var(--color-accent)]/25 blur-3xl" />
    </div>
  )
}
