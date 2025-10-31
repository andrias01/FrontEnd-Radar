interface FilterOption {
  label: string
  value: string | number
}

interface FilterBarProps {
  yearOptions: FilterOption[]
  programOptions: FilterOption[]
  contractOptions: FilterOption[]
  selected: {
    year?: number
    program?: string
    contractType?: string
  }
  onChange: (filters: { year?: number; program?: string; contractType?: string }) => void
}

export const FilterBar = ({ yearOptions, programOptions, contractOptions, selected, onChange }: FilterBarProps): JSX.Element => {
  const handleChange = (key: 'year' | 'program' | 'contractType', value: string) => {
    const nextFilters = {
      ...selected,
      [key]: value ? (key === 'year' ? Number(value) : value) : undefined,
    }
    onChange(nextFilters)
  }

  return (
    <div className="flex flex-wrap gap-4 rounded-3xl border border-white/60 bg-white p-4 shadow">
      <div className="flex flex-1 min-w-[180px] flex-col">
        <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Año</label>
        <select
          value={selected.year ?? ''}
          onChange={(event) => handleChange('year', event.target.value)}
          className="mt-2 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 focus:border-[color:var(--color-primary)] focus:outline-none"
        >
          <option value="">Todos</option>
          {yearOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-1 min-w-[180px] flex-col">
        <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Programa académico</label>
        <select
          value={selected.program ?? ''}
          onChange={(event) => handleChange('program', event.target.value)}
          className="mt-2 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 focus:border-[color:var(--color-primary)] focus:outline-none"
        >
          <option value="">Todos</option>
          {programOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-1 min-w-[180px] flex-col">
        <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Tipo de contrato</label>
        <select
          value={selected.contractType ?? ''}
          onChange={(event) => handleChange('contractType', event.target.value)}
          className="mt-2 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 focus:border-[color:var(--color-primary)] focus:outline-none"
        >
          <option value="">Todos</option>
          {contractOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
