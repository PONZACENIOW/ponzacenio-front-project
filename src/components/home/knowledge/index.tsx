import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

export const KnowledgeCard = ({ setup }) => {
  return (
    <div className="flex gap-4 items-center mb-4 font-mono">
      <div className="w-4 h-4 bg-amber-400/30 rounded-full grid justify-center content-center">
        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
      </div>
      <div className="grid text-gray-300">
        <span className="text-lg">{setup.technology}</span>
        <div className="bg-black/30 shadow-2xl px-2 text-xs">
          <span className="font-bold">{setup.level}</span> | {setup.time}
        </div>
      </div>
    </div>
  )
}

export const KnowledgeContainer = ({}) => {
  return (
    <div className="mt-12 2xl:mt-20 mx-5 sm:mx-20 lg:mx-40 2xl:mx-80">
      <Swiper
        className="bg-yellow-500/10 rounded-3xl shadow-2xl text-gray-100 uppercase font-mono home-swiper"
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
        <SwiperSlide className="p-5 pb-10 2xl:p-10">
          <div className="mb-10">
            <h3 className="uppercase text-xl 2xl:text-center 2xl:text-3xl">
              Tecnologías
            </h3>
            <div className="mt-8 grid grid-cols-2">
              <KnowledgeCard
                setup={{
                  technology: 'HTML',
                  level: 'Avanzado',
                  time: '3 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'CSS',
                  level: 'Avanzado',
                  time: '3 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'JS',
                  level: 'Avanzado',
                  time: '3 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'PHP',
                  level: 'Avanzado',
                  time: '3 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'TYPESCRIPT',
                  level: 'Básico',
                  time: '0 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'NODEJS',
                  level: 'Medio',
                  time: '1 año',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'WEBSOCKETS',
                  level: 'Medio',
                  time: '1 año',
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10">
          <div>
            <h3 className="uppercase text-xl 2xl:text-center 2xl:text-3xl">
              Frameworks
            </h3>
            <div className="mt-8 grid grid-cols-2">
              <KnowledgeCard
                setup={{
                  technology: 'VUE 3',
                  level: 'Avanzado',
                  time: '2 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'LARAVEL',
                  level: 'Avanzado',
                  time: '2 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'CODEIGNITER',
                  level: 'Medio',
                  time: '1 año',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'BOOTSTRAP',
                  level: 'Avanzado',
                  time: '3 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'TAILWIND CSS',
                  level: 'Avanzado',
                  time: '2 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'NEXTJS',
                  level: 'Medio',
                  time: '1 año',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'SOCKET.IO',
                  level: 'Medio',
                  time: '1 año',
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10">
          <div>
            <h3 className="uppercase text-xl 2xl:text-center 2xl:text-3xl">
              Librerías
            </h3>
            <div className="mt-8 grid grid-cols-2">
              <KnowledgeCard
                setup={{
                  technology: 'REACT',
                  level: 'Avanzado',
                  time: '2 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'NPM',
                  level: 'Avanzado',
                  time: '3 años',
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10">
          <div>
            <h3 className="uppercase text-xl 2xl:text-center 2xl:text-3xl">
              Herramientas
            </h3>
            <div className="mt-8 grid grid-cols-2">
              <KnowledgeCard
                setup={{
                  technology: 'FIGMA',
                  level: 'Avanzado',
                  time: '2 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'NOTION',
                  level: 'Avanzado',
                  time: '2 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'GIT / GITHUB',
                  level: 'Medio',
                  time: '3 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'POSTMAN',
                  level: 'Medio',
                  time: '2 años',
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10">
          <div>
            <h3 className="uppercase text-xl 2xl:text-center 2xl:text-3xl">
              Base de datos
            </h3>
            <div className="mt-8 grid grid-cols-2">
              <KnowledgeCard
                setup={{
                  technology: 'MYSQL',
                  level: 'Avanzado',
                  time: '3 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'POSTGRESQL',
                  level: 'Medio',
                  time: '1 año',
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10">
          <div>
            <h3 className="uppercase text-xl 2xl:text-center 2xl:text-3xl">
              Servidores
            </h3>
            <div className="mt-8 grid grid-cols-2">
              <KnowledgeCard
                setup={{
                  technology: 'DIGITAL OCEAN',
                  level: 'Medio',
                  time: '1 año',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'HEROKU',
                  level: 'Medio',
                  time: '1 año',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'CPANEL',
                  level: 'Avanzado',
                  time: '3 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'NGINX',
                  level: 'Medio',
                  time: '2 años',
                }}
              />
              <KnowledgeCard
                setup={{
                  technology: 'APACHE',
                  level: 'Medio',
                  time: '3 años',
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 pb-10 2xl:p-10">
          <div>
            <h3 className="uppercase text-xl 2xl:text-center 2xl:text-3xl">
              CMS
            </h3>
            <div className="mt-8 grid grid-cols-2">
              <KnowledgeCard
                setup={{
                  technology: 'WORDPRESS',
                  level: 'Medio',
                  time: '3 años',
                }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default KnowledgeCard
