import { useMemo } from 'react'
import type { ColumnDef } from '@tanstack/react-table'

import { CompaniesSectorChart } from '../../components/charts/CompaniesSectorChart'
import { CompetenciesTrendChart } from '../../components/charts/CompetenciesTrendChart'
import { PracticeHireChart } from '../../components/charts/PracticeHireChart'
import { FilterBar } from '../../components/common/FilterBar'
import { DataTable } from '../../components/common/DataTable'
import { StatCard } from '../../components/common/StatCard'
import { useDashboardData } from '../../hooks/useDashboardData'
import { mockCompanies, mockStudents } from '../../services/mockData'
import type { StudentRecord } from '../../types/data'

export const InstitutionDashboardPage = (): JSX.Element => {
  const { filters, setFilters, metrics, practiceVsHired, companiesBySector, competenciesOverTime, evaluations } =
    useDashboardData()

  const tableColumns: ColumnDef<StudentRecord>[] = useMemo(
    () => [
      { header: 'Estudiante', accessorKey: 'nombreCompleto' },
      { header: 'Programa', accessorKey: 'programa' },
      { header: 'Estado', accessorKey: 'estadoAcademico' },
      {
        header: 'En práctica',
        cell: ({ row }) => (row.original.enPractica ? 'Sí' : 'No'),
      },
      {
        header: 'Contratado',
        cell: ({ row }) => (row.original.contratadoDespuesPractica ? 'Sí' : 'No'),
      },
      {
        header: 'Empresa',
        accessorKey: 'empresaPractica',
      },
    ],
    [],
  )

  const yearOptions = useMemo(
    () =>
      [2024, 2023, 2022, 2021].map((year) => ({
        label: year.toString(),
        value: year,
      })),
    [],
  )

  const programOptions = useMemo(
    () =>
      Array.from(new Set(mockStudents.map((student) => student.programa))).map((program) => ({
        label: program,
        value: program,
      })),
    [],
  )

  const contractOptions = useMemo(
    () =>
      Array.from(new Set(mockStudents.map((student) => student.tipoContrato).filter(Boolean))).map((contract) => ({
        label: contract as string,
        value: contract as string,
      })),
    [],
  )

  const filteredStudents = useMemo(() => {
    return mockStudents.filter((student) => {
      if (filters.program && student.programa !== filters.program) return false
      if (filters.contractType && student.tipoContrato !== filters.contractType) return false
      return true
    })
  }, [filters])

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Panel de institución</h1>
        <p className="text-sm text-slate-600">
          Monitorea brechas, desempeño de estudiantes y relación con empresas aliadas.
        </p>
      </div>

      <FilterBar
        yearOptions={yearOptions}
        programOptions={programOptions}
        contractOptions={contractOptions}
        selected={filters}
        onChange={setFilters}
      />

      <div className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <StatCard key={metric.id} label={metric.label} value={metric.value} trend={metric.trend} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <PracticeHireChart data={practiceVsHired} />
        <CompaniesSectorChart data={companiesBySector} />
      </div>

      <CompetenciesTrendChart data={competenciesOverTime} />

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/60 bg-white p-6 shadow">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Empresas aliadas destacadas</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {mockCompanies.slice(0, 5).map((company) => (
              <li key={company.id} className="flex items-center justify-between rounded-2xl bg-slate-50/80 px-4 py-3">
                <span>{company.nombre}</span>
                <span className="text-xs text-slate-400">{company.sector}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/60 bg-white p-6 shadow">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Competencias destacadas por evaluaciones
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {evaluations.map((evaluation) => (
              <li key={evaluation.id} className="rounded-2xl bg-slate-50/80 px-4 py-3">
                <div className="text-xs uppercase tracking-widest text-slate-500">{evaluation.metadata.sectorEmpresa}</div>
                <div className="mt-1 text-sm font-semibold text-slate-800">Puntaje total: {evaluation.puntajeTotal}</div>
                <div className="text-xs text-slate-500">Nivel: {evaluation.nivelDesempeno}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <DataTable data={filteredStudents} columns={tableColumns} />
    </div>
  )
}
