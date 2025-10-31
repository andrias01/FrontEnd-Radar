import type { UserRole } from './auth'

export interface MockUser {
  id: string
  name: string
  email: string
  password: string
  avatar: string
  role: UserRole
  institutionId?: string
  providers: string[]
}

export interface StudentRecord {
  id: string
  nombreCompleto: string
  tipoIdentificacion: 'CC' | 'TI' | 'CE'
  numeroIdentificacion: string
  correoInstitucional: string
  correoPersonal: string
  telefono: string
  programa: string
  semestreActual: number
  promedioAcumulado: number
  estadoAcademico: 'Activo' | 'Egresado' | 'En práctica'
  enPractica: boolean
  fechaInicioPractica?: string
  fechaFinPractica?: string
  empresaPractica?: string
  cargoPractica?: string
  tutorEmpresa?: string
  tutorInstitucion?: string
  contratadoDespuesPractica: boolean
  empresaContratante?: string
  tipoContrato?: 'Fijo' | 'Indefinido' | 'Temporal' | 'Prestación de servicios'
  evaluacionPractica?: number
  retroalimentacionTutor?: string
  competenciasObservadas: string[]
}

export interface Company {
  id: string
  nombre: string
  sector: string
  ciudad: string
  programasDemandados: string[]
}

export interface CompetencyEvaluation {
  id: string
  estudianteId: string
  empresaId: string
  anio: number
  competenciasTecnicas: {
    aplicacionConocimientos: number
    calidadTrabajo: number
    resolucionProblemas: number
    manejoEquipos: number
    comentario?: string
  }
  competenciasBlandas: {
    iniciativa: number
    aprendizaje: number
    responsabilidad: number
    trabajoEquipo: number
    organizacionEtica: number
    comunicacion: number
    creatividad: number
    comentario?: string
  }
  metadata: {
    duracionPractica: string
    modalidadTrabajo: 'Presencial' | 'Remoto' | 'Híbrido'
    sectorEmpresa: string
  }
  puntajeTotal: number
  nivelDesempeno: 'Excelente' | 'Sobresaliente' | 'Satisfactorio' | 'En desarrollo'
  recomendadoParaContratacion: boolean
}

export interface DashboardMetric {
  id: string
  label: string
  value: number
  trend?: number
  description?: string
}

export interface ChartDataPoint {
  name: string
  value: number
  category?: string
}

export type DynamicFieldType =
  | 'text'
  | 'number'
  | 'select'
  | 'multiselect'
  | 'date'
  | 'textarea'
  | 'checkbox'
  | 'rating'

export interface DynamicFieldOption {
  label: string
  value: string
}

export interface DynamicFormField {
  id: string
  label: string
  type: DynamicFieldType
  options?: DynamicFieldOption[]
  required?: boolean
  placeholder?: string
}

export interface DynamicFormSchema {
  id: string
  title: string
  description?: string
  fields: DynamicFormField[]
}
