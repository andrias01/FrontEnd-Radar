import { CallToAction } from '../../components/common/CallToAction'
import { HeroSection } from '../../components/common/HeroSection'
import { InformativeSection } from '../../components/common/InformativeSection'
import { RadarShowcase } from '../../components/charts/RadarShowcase'

export const LandingPage = (): JSX.Element => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <InformativeSection
        id="brechas"
        eyebrow="Brechas educativas"
        title="Monitoreo permanente de la coherencia formativa"
        description="Identifica oportunidades de mejora y fortalezas institucionales cruzando fuentes académicas y empresariales."
        items={[
          {
            title: 'Alerta temprana de brechas',
            description: 'Detecta desviaciones entre competencias planificadas y observadas en el contexto laboral.',
          },
          {
            title: 'Seguimiento longitudinal',
            description: 'Evalúa cohortes año a año y mide el impacto de los ajustes curriculares.',
          },
          {
            title: 'Comparativos sectoriales',
            description: 'Benchmark con otras instituciones y sectores empresariales clave.',
          },
          {
            title: 'Insights accionables',
            description: 'Integración con tableros BI y microservicios analíticos propios de la institución.',
          },
        ]}
      />
      <InformativeSection
        id="beneficios"
        eyebrow="Beneficios integrales"
        title="Valor para instituciones y empresas"
        description="Una plataforma colaborativa donde los datos respaldan decisiones estratégicas."
        items={[
          {
            title: 'Instituciones',
            description:
              'Optimiza la pertinencia curricular, fortalece los vínculos empresariales y demuestra resultados tangibles.',
          },
          {
            title: 'Empresas',
            description:
              'Accede a perfiles confiables, reduce tiempos de onboarding y participa activamente en la formación.',
          },
          {
            title: 'Estudiantes',
            description: 'Reciben acompañamiento personalizado y visibilidad de su progreso en competencias clave.',
          },
          {
            title: 'Ecosistema',
            description: 'Las métricas compartidas fortalecen la calidad profesional del país.',
          },
        ]}
      />
      <RadarShowcase />
      <CallToAction />
    </div>
  )
}
