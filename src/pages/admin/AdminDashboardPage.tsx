import { useEffect, useMemo, useState } from 'react'
import { BadgeCheck, ClipboardList, Link2, Users } from 'lucide-react'

import { DataTable, type ColumnDef } from '../../components/common/DataTable'
import { StatCard } from '../../components/common/StatCard'
import { mockAdminUsers, mockCompanies, mockDynamicForms, mockEvaluations } from '../../services/mockData'
import type { User } from '../../types/auth'

const summaryStats = [
  { label: 'Usuarios activos', value: mockAdminUsers.length, trend: 5 },
  { label: 'Empresas vinculadas', value: mockCompanies.length, trend: 12 },
  { label: 'Formularios configurados', value: mockDynamicForms.length, trend: 3 },
  { label: 'Evaluaciones anuales', value: mockEvaluations.length * 12, trend: 8 },
]

export const AdminDashboardPage = (): JSX.Element => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 600)
    return () => window.clearTimeout(timer)
  }, [])

  const userColumns: ColumnDef<User>[] = useMemo(
    () => [
      {
        header: 'Nombre',
        accessorKey: 'name',
      },
      {
        header: 'Correo',
        accessorKey: 'email',
      },
      {
        header: 'Rol',
        accessorKey: 'role',
        cell: ({ getValue }) => (getValue<string>() === 'admin' ? 'Administrador' : 'Institución'),
      },
      {
        header: 'Estado',
        cell: () => (
          <span className="rounded-full bg-[color:var(--color-primary-light)]/20 px-3 py-1 text-xs font-semibold text-[color:var(--color-primary-dark)]">
            Activo
          </span>
        ),
      },
    ],
    [],
  )

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Panel administrativo</h1>
        <p className="text-sm text-slate-600">
          Configura usuarios, personaliza formularios y gestiona la colaboración con empresas.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {summaryStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} trend={stat.trend} loading={loading} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/60 bg-white p-6 shadow">
          <div className="flex items-center gap-3">
            <Users className="h-10 w-10 rounded-full bg-[color:var(--color-primary)]/10 p-2 text-[color:var(--color-primary)]" />
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Gestión de usuarios</h3>
              <p className="text-xs text-slate-500">Crear, editar, bloquear usuarios y asignar roles.</p>
            </div>
          </div>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• Control de acceso granular y trazabilidad completa.</li>
            <li>• Bloqueo temporal y restablecimiento de contraseñas.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/60 bg-white p-6 shadow">
          <div className="flex items-center gap-3">
            <ClipboardList className="h-10 w-10 rounded-full bg-[color:var(--color-primary)]/10 p-2 text-[color:var(--color-primary)]" />
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Formularios dinámicos</h3>
              <p className="text-xs text-slate-500">Extiende o modifica campos para instituciones y empresas.</p>
            </div>
          </div>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• Añade campos personalizados con validaciones.</li>
            <li>• Genera enlaces directos para evaluaciones empresariales.</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/60 bg-white p-6 shadow">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Formularios configurados</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {mockDynamicForms.map((form) => (
              <li key={form.id} className="rounded-2xl bg-slate-50/80 px-4 py-3">
                <div className="text-sm font-semibold text-slate-800">{form.title}</div>
                <div className="text-xs text-slate-500">{form.fields.length} campos dinámicos</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/60 bg-white p-6 shadow">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Empresas participantes</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {mockCompanies.map((company) => (
              <li key={company.id} className="flex items-center justify-between rounded-2xl bg-slate-50/80 px-4 py-3">
                <div>
                  <div className="text-sm font-semibold text-slate-800">{company.nombre}</div>
                  <div className="text-xs text-slate-500">{company.sector}</div>
                </div>
                <BadgeCheck className="h-5 w-5 text-[color:var(--color-primary)]" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-3xl border border-white/60 bg-white p-6 shadow">
        <div className="flex items-center gap-3">
          <Link2 className="h-10 w-10 rounded-full bg-[color:var(--color-primary)]/10 p-2 text-[color:var(--color-primary)]" />
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Enlaces para empresas</h3>
            <p className="text-xs text-slate-500">Genera URLs exclusivas para evaluaciones por empresa.</p>
          </div>
        </div>
        <div className="mt-6 space-y-3 text-sm text-slate-600">
          {mockCompanies.slice(0, 3).map((company) => (
            <div key={company.id} className="rounded-2xl bg-slate-50/80 px-4 py-3">
              <div className="text-sm font-semibold text-slate-800">{company.nombre}</div>
              <div className="text-xs text-slate-500">radar.edu/evaluaciones/{company.id}</div>
            </div>
          ))}
        </div>
      </div>

      <DataTable data={mockAdminUsers} columns={userColumns} />
    </div>
  )
}
