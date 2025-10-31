import { useMemo, useState } from 'react'

import { mockChartSeries, mockDashboardMetrics, mockEvaluations, mockRadarData, mockStudents } from '../services/mockData'
import type { ChartDataPoint, CompetencyEvaluation, DashboardMetric } from '../types/data'

interface DashboardFilters {
  year?: number
  program?: string
  company?: string
  contractType?: string
}

export const useDashboardData = () => {
  const [filters, setFilters] = useState<DashboardFilters>({})

  const metrics: DashboardMetric[] = useMemo(() => mockDashboardMetrics, [])

  const radarData: ChartDataPoint[] = useMemo(() => mockRadarData, [])

  const evaluations: CompetencyEvaluation[] = useMemo(() => {
    return mockEvaluations.filter((evaluation) => {
      const student = mockStudents.find((item) => item.id === evaluation.estudianteId)
      if (!student) return false

      if (filters.year && evaluation.anio !== filters.year) return false
      if (filters.program && student.programa !== filters.program) return false
      if (filters.contractType && student.tipoContrato !== filters.contractType) return false

      return true
    })
  }, [filters])

  const practiceVsHired = useMemo(() => mockChartSeries.practiceVsHired, [])
  const companiesBySector = useMemo(() => mockChartSeries.companiesBySector, [])
  const competenciesOverTime = useMemo(() => mockChartSeries.competenciesOverTime, [])

  return {
    filters,
    setFilters,
    metrics,
    radarData,
    evaluations,
    practiceVsHired,
    companiesBySector,
    competenciesOverTime,
  }
}
