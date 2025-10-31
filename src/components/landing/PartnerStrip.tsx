const partners = [
  { name: 'Universidad Horizonte', label: 'Educación superior' },
  { name: 'Colegio Andino', label: 'Media técnica' },
  { name: 'Red Empresarial', label: 'Empresas aliadas' },
  { name: 'Tech4Jobs', label: 'Talent tech' },
]

export const PartnerStrip = (): JSX.Element => {
  return (
    <section className="bg-white/80 py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
        {partners.map((partner) => (
          <div key={partner.name} className="text-center">
            <p className="text-sm font-semibold text-slate-500">{partner.name}</p>
            <p className="text-[11px] text-slate-400">{partner.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
