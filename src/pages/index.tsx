import HomeLayout from '@/layouts/home'
import {
  Divider,
  AptitudesContainer,
  KnowledgeContainer,
  ProjectsContainer,
  PersonalContainer,
  EducationContainer,
} from '../components/home'
import {
  EducationIcon,
  WebDevelopmentProjectsIcon,
  DumbbellsIcon,
  IdeaIcon,
} from '@/components/Icons'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Home() {
  return (
    <HomeLayout setup={{ title: 'Presentación' }}>
      <PersonalContainer />
      <Divider
        setup={{ title: 'Proyectos' }}
        icon={
          <WebDevelopmentProjectsIcon className="stroke-amber-300 stroke-[1rem]" />
        }
      />
      <ProjectsContainer />
      <Divider
        setup={{ title: 'Educación' }}
        icon={<EducationIcon className="stroke-amber-300 stroke-[1rem]" />}
      />
      <EducationContainer
        setup={{
          institutes: [
            {
              title: 'UNITEC Cuitláhuac',
              careeer: 'Ing. Sistemas Computacionales',
              cycle: '2017 | 2020',
            },
            {
              title: 'UNITEC Marina Nacional',
              careeer: 'Maestría en Dirección de Proyectos',
              cycle: '2020 | Actual',
            },
          ],
        }}
      />
      <Divider
        setup={{ title: 'Conocimientos' }}
        icon={<IdeaIcon className="stroke-amber-300 stroke-[1rem]" />}
      />
      <KnowledgeContainer />
      <Divider
        setup={{ title: 'Aptitudes' }}
        icon={<DumbbellsIcon className="stroke-amber-300 stroke-[1rem]" />}
      />
      <AptitudesContainer
        setup={{
          titles: [
            'Trabajo y manejo de equipo.',
            'Analizo los detalles, observador y perfeccionista en mis actividades.',
            'Profesional autodidacta.',
            'Apasionado por mi trabajo.',
          ],
        }}
      />
    </HomeLayout>
  )
}
