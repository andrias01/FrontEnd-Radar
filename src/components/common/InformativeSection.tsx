interface InformativeSectionProps {
  id?: string
  eyebrow: string
  title: string
  description: string
  items: Array<{ title: string; description: string }>
}

export const InformativeSection = ({ id, eyebrow, title, description, items }: InformativeSectionProps): JSX.Element => {
  return (
    <section id={id} className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)]">{eyebrow}</span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base text-slate-600">{description}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-100 bg-slate-50/60 p-8 shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-primary)]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
