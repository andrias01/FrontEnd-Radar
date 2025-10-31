import { Layers, PlusCircle } from 'lucide-react'

import { DynamicForm } from '../../components/forms/DynamicForm'
import { useDynamicForm } from '../../hooks/useDynamicForm'

export const AdminConfigPage = (): JSX.Element => {
  const companyForm = useDynamicForm('company-evaluation')

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log('config form', values)
    alert('Configuración almacenada (simulada).')
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Configuración avanzada</h1>
        <p className="text-sm text-slate-600">
          Administra atributos de calidad, estructuras de formularios y accesos empresariales.
        </p>
      </div>

      <div className="rounded-3xl border border-white/60 bg-white p-6 shadow">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Layers className="h-10 w-10 rounded-full bg-[color:var(--color-primary)]/10 p-2 text-[color:var(--color-primary)]" />
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Atributos de calidad</h3>
              <p className="text-xs text-slate-500">
                Ajusta la ponderación de competencias y añade nuevos indicadores en cuestión de minutos.
              </p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]">
            <PlusCircle className="h-4 w-4" />
            Añadir atributo
          </button>
        </div>
      </div>

      {companyForm && <DynamicForm schema={companyForm} onSubmit={handleSubmit} />}
    </div>
  )
}
