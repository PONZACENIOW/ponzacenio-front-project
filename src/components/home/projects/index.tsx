import { WebDevelopmentIcon } from '@/components/Icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

export const ProjectsCard = ({ setup }) => {
  return (
    <>
      <div className="flex justify-between items-start gap-8 mb-8">
        <div className="grid">
          <span className="text-xl uppercase font-bold border-b-2 border-amber-200">
            {setup.title}
          </span>
          <span className="text-xs uppercased mt-2">{setup.date}</span>
        </div>
        <div className="grid text-amber-200">
          <span className="text-xl text-center font-bold">
            {setup.duration}
          </span>
          <span className="text-center text-sm">{setup.durationText}</span>
        </div>
      </div>
      <div className="grid grid-cols-2-iauto gap-2 min-h-[10rem]">
        <div className="relative">
          <WebDevelopmentIcon className="stroke-amber-200 stroke-[0.5rem] w-32" />
          <WebDevelopmentIcon className="stroke-amber-200 w-32 absolute top-3 right-3" />
        </div>
        <p className="text-sm text-gray-300 text-justify">
          {setup.description}
        </p>
      </div>
    </>
  )
}

export const ProjectsContainer = ({}) => {
  return (
    <div className="mt-12 2xl:mt-20 mx-5 sm:mx-20 lg:mx-40 2xl:mx-80">
      <Swiper
        className="bg-yellow-500/10 rounded-3xl shadow-2xl text-gray-100 home-swiper"
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          960: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}>
        <SwiperSlide className="p-5 pb-10 2xl:p-10 grid content-between">
          <ProjectsCard
            setup={{
              title: 'Sistema escolar',
              date: 'MAR 2020 - DIC 2020',
              duration: 9,
              durationText: 'Meses',
              description:
                'Permite la comunicación entre los egresados mediante un chat en línea, publicaciones y reacciones. Módulo de comunicados, ofertas laborales y temas religiosos.',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10 grid content-between">
          <ProjectsCard
            setup={{
              title: 'Club América WordPress',
              date: 'OCT 2020 - ENE 2021',
              duration: 3,
              durationText: 'Meses',
              description:
                'Migración de un sitio elaborado en WordPress hacia los servicios de Amazon. Actualización de plug-ins, migración de servicios para el consumo de recursos y SEO.',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10 grid content-between">
          <ProjectsCard
            setup={{
              title: 'Corona Atizápan',
              date: 'ABR 2021 - MAY 2021',
              duration: 1,
              durationText: 'Mes',
              description:
                'Landing page seccionada por nosotros, negocios, capacitaciones, categorías y noticias. Propuesta de diseño, Optimización SEO y auto administrable todo el sitio.',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10 grid content-between">
          <ProjectsCard
            setup={{
              title: 'ERP / Contabilidad',
              date: 'AGO 2021 - ENE 2022',
              duration: 5,
              durationText: 'Meses',
              description:
                'Sistema interno con módulos de programación, calendario, análisis de tiempos, reporte de tiempos, reporte de gastos y todo el manejo de empleados en una empresa.',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10 grid content-between">
          <ProjectsCard
            setup={{
              title: 'Sistema de denuncias',
              date: 'NOV 2021 - JUL 2022',
              duration: 8,
              durationText: 'Meses',
              description:
                'Sistema que permite crear denuncias a través de comités generados en la plataforma, módulo de reportes mediantes gráficas y resolución con evidencias.',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10 grid content-between">
          <ProjectsCard
            setup={{
              title: 'ERP / CRM',
              date: 'FEB 2022 - JUL 2022',
              duration: 5,
              durationText: 'Meses',
              description:
                'Sistema interno con módulo de tickets, clientes, generación de cotizaciones en PDF, servicios, paquetes y dominios. Permite organizar el modelo de negocio para un proveedor de sitios web.',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10 grid content-between">
          <ProjectsCard
            setup={{
              title: 'Sistema de partidos LIGA MX',
              date: 'MAY 2022 - JUN 2022',
              duration: 1,
              durationText: 'Mes',
              description:
                'Consumo de API de jugadores, alineaciones, posiciones, equipo técnico y minuto a minuto del partido. Permite eliminar, editar y crear nuevos datos con una vista administrativa.',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10 grid content-between">
          <ProjectsCard
            setup={{
              title: 'Tarjeta de presentación',
              date: 'JUN 2022 - JUL 2022',
              duration: 2,
              durationText: 'Meses',
              description:
                'Muestra datos generales y de contacto de una persona a través de una tarjeta virtual. Posibilidad de compartirla o visitarla desde un código QR.',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProjectsCard
