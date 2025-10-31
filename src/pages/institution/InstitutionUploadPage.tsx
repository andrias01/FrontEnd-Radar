import { Inbox, Upload } from 'lucide-react'

import { DynamicForm } from '../../components/forms/DynamicForm'
import { useDynamicForm } from '../../hooks/useDynamicForm'

export const InstitutionUploadPage = (): JSX.Element => {
  const studentForm = useDynamicForm('institution-student')

  const handleFormSubmit = (values: Record<string, unknown>) => {
    console.log('formulario estudiantes', values)
    alert('Formulario enviado correctamente (simulado).')
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Carga de información</h1>
        <p className="text-sm text-slate-600">
          Integra tus estudiantes y evaluaciones desde archivos CSV o utiliza formularios configurables.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-dashed border-[color:var(--color-primary)]/40 bg-white p-10 text-center shadow">
          <Inbox className="mx-auto h-12 w-12 text-[color:var(--color-primary)]" />
          <h3 className="mt-4 text-xl font-semibold text-slate-900">Carga masiva CSV</h3>
          <p className="mt-2 text-sm text-slate-600">
            Descarga la plantilla estandarizada y sube tus registros para sincronizar rápidamente.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[color:var(--color-primary-dark)]">
            <Upload className="h-4 w-4" />
            Subir archivo CSV
          </button>
        </div>
        <div className="rounded-3xl border border-white/60 bg-white p-10 shadow">
          <h3 className="text-xl font-semibold text-slate-900">Integración con microservicios</h3>
          <p className="mt-2 text-sm text-slate-600">
            Configura la URL base en tu archivo <code>.env</code> utilizando la clave <code>VITE_API_BASE_URL</code> para
            conectar tu backend de microservicios. Puedes autenticarte con tokens JWT o API Keys.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Los servicios REST o GraphQL pueden usar <strong>axios</strong> desde <code>src/services/api.ts</code> para centralizar
            interceptores, manejo de errores y reintentos.
          </p>
        </div>
      </div>

      {studentForm && <DynamicForm schema={studentForm} onSubmit={handleFormSubmit} />}
    </div>
  )
}
