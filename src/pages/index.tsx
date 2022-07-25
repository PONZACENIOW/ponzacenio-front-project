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
      <PersonalContainer
        setup={{
          name: 'Cesar Antonio Ponce de León Piza',
          github: 'ponzaceniow',
          email: 'ponzacenio.work@gmail.com',
          phone: '(+52) 55-7496-3573',
          address:
            'Salvador Díaz Mirón 161, Sta. María la Ribera, Cuauhtémoc, 06400, CDMX',
        }}
      />
      <Divider
        setup={{ title: 'Proyectos' }}
        icon={
          <WebDevelopmentProjectsIcon className="stroke-amber-300 stroke-[1rem]" />
        }
      />
      <ProjectsContainer
        setup={[
          {
            title: 'Sistema escolar',
            date: 'MAR 2020 - DIC 2020',
            duration: 9,
            durationText: 'Meses',
            description:
              'Permite la comunicación entre los egresados mediante un chat en línea, publicaciones y reacciones. Módulo de comunicados, ofertas laborales y temas religiosos.',
          },
          {
            title: 'Club América WordPress',
            date: 'OCT 2020 - ENE 2021',
            duration: 3,
            durationText: 'Meses',
            description:
              'Migración de un sitio elaborado en WordPress hacia los servicios de Amazon. Actualización de plug-ins, migración de servicios para el consumo de recursos y SEO.',
          },
          {
            title: 'Corona Atizápan',
            date: 'ABR 2021 - MAY 2021',
            duration: 1,
            durationText: 'Mes',
            description:
              'Landing page seccionada por nosotros, negocios, capacitaciones, categorías y noticias. Propuesta de diseño, Optimización SEO y auto administrable todo el sitio.',
          },
          {
            title: 'ERP / Contabilidad',
            date: 'AGO 2021 - ENE 2022',
            duration: 5,
            durationText: 'Meses',
            description:
              'Sistema interno con módulos de programación, calendario, análisis de tiempos, reporte de tiempos, reporte de gastos y todo el manejo de empleados en una empresa.',
          },
          {
            title: 'Sistema de denuncias',
            date: 'NOV 2021 - JUL 2022',
            duration: 8,
            durationText: 'Meses',
            description:
              'Sistema que permite crear denuncias a través de comités generados en la plataforma, módulo de reportes mediantes gráficas y resolución con evidencias.',
          },
          {
            title: 'ERP / CRM',
            date: 'FEB 2022 - JUL 2022',
            duration: 5,
            durationText: 'Meses',
            description:
              'Sistema interno con módulo de tickets, clientes, generación de cotizaciones en PDF, servicios, paquetes y dominios. Permite organizar el modelo de negocio para un proveedor de sitios web.',
          },
          {
            title: 'Sistema de partidos LIGA MX',
            date: 'MAY 2022 - JUN 2022',
            duration: 1,
            durationText: 'Mes',
            description:
              'Consumo de API de jugadores, alineaciones, posiciones, equipo técnico y minuto a minuto del partido. Permite eliminar, editar y crear nuevos datos con una vista administrativa.',
          },
          {
            title: 'Tarjeta de presentación',
            date: 'JUN 2022 - JUL 2022',
            duration: 2,
            durationText: 'Meses',
            description:
              'Muestra datos generales y de contacto de una persona a través de una tarjeta virtual. Posibilidad de compartirla o visitarla desde un código QR.',
          },
        ]}
      />
      <Divider
        setup={{ title: 'Educación' }}
        icon={<EducationIcon className="stroke-amber-300 stroke-[1rem]" />}
      />
      <EducationContainer
        setup={{
          institutes: [
            {
              title: 'UNITEC Cuitláhuac',
              career: 'Ing. Sistemas Computacionales',
              cycle: '2017 | 2020',
            },
            {
              title: 'UNITEC Marina Nacional',
              career: 'Maestría en Dirección de Proyectos',
              cycle: '2020 | Actual',
            },
          ],
        }}
      />
      <Divider
        setup={{ title: 'Conocimientos' }}
        icon={<IdeaIcon className="stroke-amber-300 stroke-[1rem]" />}
      />
      <KnowledgeContainer
        setup={[
          {
            title: 'Tecnologías',
            body: [
              {
                technology: 'HTML',
                level: 'Avanzado',
                time: '3 años',
              },
              {
                technology: 'CSS',
                level: 'Avanzado',
                time: '3 años',
              },
              {
                technology: 'JS',
                level: 'Avanzado',
                time: '3 años',
              },
              {
                technology: 'PHP',
                level: 'Avanzado',
                time: '3 años',
              },
              {
                technology: 'TYPESCRIPT',
                level: 'Básico',
                time: '0 años',
              },
              {
                technology: 'NODEJS',
                level: 'Medio',
                time: '1 año',
              },
              {
                technology: 'WEBSOCKETS',
                level: 'Medio',
                time: '1 año',
              },
            ],
          },
          {
            title: 'Frameworks',
            body: [
              {
                technology: 'VUE 3',
                level: 'Avanzado',
                time: '2 años',
              },
              {
                technology: 'LARAVEL',
                level: 'Avanzado',
                time: '2 años',
              },
              {
                technology: 'CODEIGNITER',
                level: 'Medio',
                time: '1 año',
              },
              {
                technology: 'BOOTSTRAP',
                level: 'Avanzado',
                time: '3 años',
              },
              {
                technology: 'TAILWIND CSS',
                level: 'Avanzado',
                time: '2 años',
              },
              {
                technology: 'NEXTJS',
                level: 'Medio',
                time: '1 año',
              },
            ],
          },
          {
            title: 'Librerías',
            body: [
              {
                technology: 'REACT',
                level: 'Avanzado',
                time: '2 años',
              },
              {
                technology: 'NPM',
                level: 'Avanzado',
                time: '3 años',
              },
              {
                technology: 'SOCKET.IO',
                level: 'Medio',
                time: '1 año',
              },
            ],
          },
          {
            title: 'Herramientas',
            body: [
              {
                technology: 'FIGMA',
                level: 'Avanzado',
                time: '2 años',
              },
              {
                technology: 'NOTION',
                level: 'Avanzado',
                time: '2 años',
              },
              {
                technology: 'GIT / GITHUB',
                level: 'Medio',
                time: '3 años',
              },
              {
                technology: 'POSTMAN',
                level: 'Medio',
                time: '2 años',
              },
            ],
          },
          {
            title: 'Base de datos',
            body: [
              {
                technology: 'MYSQL',
                level: 'Avanzado',
                time: '3 años',
              },
              {
                technology: 'POSTGRESQL',
                level: 'Medio',
                time: '1 año',
              },
            ],
          },
          {
            title: 'Servidores',
            body: [
              {
                technology: 'DIGITAL OCEAN',
                level: 'Medio',
                time: '1 año',
              },
              {
                technology: 'HEROKU',
                level: 'Medio',
                time: '1 año',
              },
              {
                technology: 'CPANEL',
                level: 'Avanzado',
                time: '3 años',
              },
              {
                technology: 'NGINX',
                level: 'Medio',
                time: '2 años',
              },
              {
                technology: 'APACHE',
                level: 'Medio',
                time: '3 años',
              },
            ],
          },
          {
            title: 'CMS',
            body: [
              {
                technology: 'WORDPRESS',
                level: 'Medio',
                time: '3 años',
              },
            ],
          },
        ]}
      />
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
