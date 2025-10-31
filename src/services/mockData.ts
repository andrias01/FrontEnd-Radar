import type {
  ChartDataPoint,
  Company,
  CompetencyEvaluation,
  DashboardMetric,
  DynamicFormSchema,
  MockUser,
  StudentRecord,
} from '../types/data'
import type { User } from '../types/auth'

export const mockUsers: MockUser[] = [
  {
    id: 'admin-1',
    name: 'Laura Méndez',
    email: 'admin@radar.edu',
    password: 'Radar2025*',
    avatar: 'https://i.pravatar.cc/150?img=32',
    role: 'admin',
    providers: ['manual', 'google'],
  },
  {
    id: 'inst-1',
    name: 'Carlos Ortega',
    email: 'c.ortega@uniandes.edu',
    password: 'Radar2025*',
    avatar: 'https://i.pravatar.cc/150?img=45',
    role: 'institution',
    institutionId: 'uniandes',
    providers: ['manual', 'github'],
  },
]

export const mockStudents: StudentRecord[] = [
  {
    id: 'stu-001',
    nombreCompleto: 'María Fernanda López',
    tipoIdentificacion: 'CC',
    numeroIdentificacion: '1023987654',
    correoInstitucional: 'mf.lopez@uniandes.edu',
    correoPersonal: 'maria.lopez@gmail.com',
    telefono: '+57 310 555 1234',
    programa: 'Ingeniería de Sistemas',
    semestreActual: 10,
    promedioAcumulado: 4.2,
    estadoAcademico: 'En práctica',
    enPractica: true,
    fechaInicioPractica: '2024-08-01',
    fechaFinPractica: '2024-12-20',
    empresaPractica: 'Globant',
    cargoPractica: 'Developer Associate',
    tutorEmpresa: 'Ana Rodríguez',
    tutorInstitucion: 'Carlos Rojas',
    contratadoDespuesPractica: true,
    empresaContratante: 'Globant',
    tipoContrato: 'Fijo',
    evaluacionPractica: 4.5,
    retroalimentacionTutor: 'Excelente dominio técnico y actitud proactiva.',
    competenciasObservadas: ['React', 'Scrum', 'Comunicación'],
  },
  {
    id: 'stu-002',
    nombreCompleto: 'Juan Sebastián Díaz',
    tipoIdentificacion: 'CC',
    numeroIdentificacion: '1009876543',
    correoInstitucional: 'js.diaz@uniandes.edu',
    correoPersonal: 'juan.diaz@gmail.com',
    telefono: '+57 315 444 9876',
    programa: 'Ingeniería Industrial',
    semestreActual: 9,
    promedioAcumulado: 4.0,
    estadoAcademico: 'Activo',
    enPractica: false,
    contratadoDespuesPractica: false,
    competenciasObservadas: ['Gestión de proyectos', 'Excel avanzado'],
  },
  {
    id: 'stu-003',
    nombreCompleto: 'Paula Andrea Torres',
    tipoIdentificacion: 'CC',
    numeroIdentificacion: '1012233445',
    correoInstitucional: 'paula.torres@uniandes.edu',
    correoPersonal: 'paula.torres@gmail.com',
    telefono: '+57 301 333 4455',
    programa: 'Diseño',
    semestreActual: 8,
    promedioAcumulado: 4.5,
    estadoAcademico: 'En práctica',
    enPractica: true,
    fechaInicioPractica: '2024-07-15',
    fechaFinPractica: '2024-11-30',
    empresaPractica: 'Rappi',
    cargoPractica: 'UX Research Intern',
    tutorEmpresa: 'Daniela Muñoz',
    tutorInstitucion: 'Sofía Pérez',
    contratadoDespuesPractica: false,
    competenciasObservadas: ['Investigación', 'Diseño centrado en el usuario', 'Prototipado'],
  },
]

export const mockCompanies: Company[] = [
  {
    id: 'comp-01',
    nombre: 'Globant',
    sector: 'Tecnología',
    ciudad: 'Bogotá',
    programasDemandados: ['Ingeniería de Sistemas', 'Diseño'],
  },
  {
    id: 'comp-02',
    nombre: 'Bancolombia',
    sector: 'Financiero',
    ciudad: 'Medellín',
    programasDemandados: ['Ingeniería Industrial', 'Administración'],
  },
  {
    id: 'comp-03',
    nombre: 'Rappi',
    sector: 'Tecnología',
    ciudad: 'Bogotá',
    programasDemandados: ['Diseño', 'Ingeniería de Sistemas'],
  },
]

export const mockEvaluations: CompetencyEvaluation[] = [
  {
    id: 'eval-001',
    estudianteId: 'stu-001',
    empresaId: 'comp-01',
    anio: 2024,
    competenciasTecnicas: {
      aplicacionConocimientos: 5,
      calidadTrabajo: 4,
      resolucionProblemas: 5,
      manejoEquipos: 4,
      comentario: 'Se adapta rápido a nuevos retos técnicos.',
    },
    competenciasBlandas: {
      iniciativa: 5,
      aprendizaje: 5,
      responsabilidad: 4,
      trabajoEquipo: 5,
      organizacionEtica: 4,
      comunicacion: 5,
      creatividad: 4,
      comentario: 'Gran liderazgo en equipos ágiles.',
    },
    metadata: {
      duracionPractica: '6 meses',
      modalidadTrabajo: 'Híbrido',
      sectorEmpresa: 'Tecnología',
    },
    puntajeTotal: 92,
    nivelDesempeno: 'Sobresaliente',
    recomendadoParaContratacion: true,
  },
  {
    id: 'eval-002',
    estudianteId: 'stu-003',
    empresaId: 'comp-03',
    anio: 2024,
    competenciasTecnicas: {
      aplicacionConocimientos: 4,
      calidadTrabajo: 5,
      resolucionProblemas: 4,
      manejoEquipos: 4,
      comentario: 'Creativa y enfocada en el usuario.',
    },
    competenciasBlandas: {
      iniciativa: 4,
      aprendizaje: 4,
      responsabilidad: 5,
      trabajoEquipo: 4,
      organizacionEtica: 5,
      comunicacion: 4,
      creatividad: 5,
      comentario: 'Excelente comunicación con stakeholders.',
    },
    metadata: {
      duracionPractica: '5 meses',
      modalidadTrabajo: 'Remoto',
      sectorEmpresa: 'Tecnología',
    },
    puntajeTotal: 88,
    nivelDesempeno: 'Sobresaliente',
    recomendadoParaContratacion: true,
  },
]

export const mockDashboardMetrics: DashboardMetric[] = [
  { id: 'students-practice', label: 'Estudiantes en práctica', value: 42, trend: 8 },
  { id: 'hired-rate', label: 'Contratados tras práctica', value: 65, trend: 12 },
  { id: 'avg-score', label: 'Promedio evaluaciones', value: 4.3 },
  { id: 'active-companies', label: 'Empresas vinculadas', value: 28, trend: -3 },
]

export const mockRadarData: ChartDataPoint[] = [
  { name: 'Aplicación de conocimientos', value: 4.5 },
  { name: 'Resolución de problemas', value: 4.2 },
  { name: 'Trabajo en equipo', value: 4.7 },
  { name: 'Comunicación', value: 4.4 },
  { name: 'Creatividad', value: 4.1 },
  { name: 'Responsabilidad', value: 4.8 },
]

export const mockChartSeries = {
  practiceVsHired: [
    { name: '2021', practice: 35, hired: 22 },
    { name: '2022', practice: 40, hired: 28 },
    { name: '2023', practice: 45, hired: 30 },
    { name: '2024', practice: 52, hired: 36 },
  ],
  companiesBySector: [
    { name: 'Tecnología', value: 45 },
    { name: 'Financiero', value: 25 },
    { name: 'Consultoría', value: 15 },
    { name: 'Manufactura', value: 15 },
  ],
  competenciesOverTime: [
    { name: '2021', tecnologia: 3.9, blandas: 4.1 },
    { name: '2022', tecnologia: 4.1, blandas: 4.2 },
    { name: '2023', tecnologia: 4.2, blandas: 4.3 },
    { name: '2024', tecnologia: 4.5, blandas: 4.4 },
  ],
}

export const mockDynamicForms: DynamicFormSchema[] = [
  {
    id: 'institution-student',
    title: 'Registro de estudiantes en práctica',
    description: 'Completa la información clave para el seguimiento académico y empresarial.',
    fields: [
      { id: 'nombreCompleto', label: 'Nombre completo', type: 'text', required: true },
      {
        id: 'tipoIdentificacion',
        label: 'Tipo de identificación',
        type: 'select',
        options: [
          { label: 'Cédula de ciudadanía', value: 'CC' },
          { label: 'Tarjeta de identidad', value: 'TI' },
          { label: 'Cédula de extranjería', value: 'CE' },
        ],
        required: true,
      },
      { id: 'numeroIdentificacion', label: 'Número de identificación', type: 'text', required: true },
      { id: 'correoInstitucional', label: 'Correo institucional', type: 'text', required: true },
      { id: 'telefono', label: 'Teléfono', type: 'text' },
      {
        id: 'programa',
        label: 'Programa académico',
        type: 'select',
        options: [
          { label: 'Ingeniería de Sistemas', value: 'Ingeniería de Sistemas' },
          { label: 'Ingeniería Industrial', value: 'Ingeniería Industrial' },
          { label: 'Diseño', value: 'Diseño' },
        ],
        required: true,
      },
      { id: 'semestreActual', label: 'Semestre actual', type: 'number', required: true },
      { id: 'promedioAcumulado', label: 'Promedio acumulado', type: 'number', required: true },
      {
        id: 'enPractica',
        label: 'Actualmente en práctica',
        type: 'checkbox',
      },
      {
        id: 'empresaPractica',
        label: 'Empresa de práctica',
        type: 'text',
        placeholder: 'Nombre de la empresa donde realiza la práctica',
      },
      {
        id: 'competenciasObservadas',
        label: 'Competencias destacadas',
        type: 'multiselect',
        options: [
          { label: 'Comunicación', value: 'Comunicación' },
          { label: 'Pensamiento crítico', value: 'Pensamiento crítico' },
          { label: 'Liderazgo', value: 'Liderazgo' },
          { label: 'Innovación', value: 'Innovación' },
        ],
      },
    ],
  },
  {
    id: 'company-evaluation',
    title: 'Evaluación empresarial del practicante',
    description: 'Formulario dinámico para valorar desempeño técnico y actitudinal.',
    fields: [
      { id: 'aplicacionConocimientos', label: 'Aplicación de conocimientos', type: 'rating', required: true },
      { id: 'calidadTrabajo', label: 'Calidad del trabajo', type: 'rating', required: true },
      { id: 'resolucionProblemas', label: 'Resolución de problemas', type: 'rating', required: true },
      { id: 'manejoEquipos', label: 'Manejo de equipos e instrumentación', type: 'rating', required: true },
      { id: 'comentarioTecnico', label: 'Comentario competencias técnicas', type: 'textarea' },
      { id: 'iniciativa', label: 'Iniciativa y proactividad', type: 'rating', required: true },
      { id: 'aprendizaje', label: 'Aprendizaje y adaptación', type: 'rating', required: true },
      { id: 'responsabilidad', label: 'Responsabilidad y compromiso', type: 'rating', required: true },
      { id: 'trabajoEquipo', label: 'Trabajo en equipo y relaciones', type: 'rating', required: true },
      { id: 'organizacionEtica', label: 'Organización y ética', type: 'rating', required: true },
      { id: 'comunicacion', label: 'Comunicación', type: 'rating', required: true },
      { id: 'creatividad', label: 'Creatividad', type: 'rating', required: true },
      { id: 'comentarioBlandas', label: 'Comentario competencias blandas', type: 'textarea' },
      {
        id: 'modalidadTrabajo',
        label: 'Modalidad de trabajo',
        type: 'select',
        options: [
          { label: 'Presencial', value: 'Presencial' },
          { label: 'Híbrido', value: 'Híbrido' },
          { label: 'Remoto', value: 'Remoto' },
        ],
      },
      { id: 'duracionPractica', label: 'Duración de la práctica', type: 'text' },
      { id: 'recomendado', label: '¿Recomendado para contratación?', type: 'checkbox' },
    ],
  },
]

export const mockAdminUsers: User[] = mockUsers
  .filter((user) => user.role === 'admin' || user.role === 'institution')
  .map(({ password: _password, providers, ...user }) => user)
