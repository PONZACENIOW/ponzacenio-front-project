import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

interface Body {
  technology: string
  level: string
  time: string
}

interface Setup {
  title: string
  body: Array<Body>
}

type KnowledgeContainerProps = {
  setup: Array<Setup>
}

type KnowledgeCardProps = {
  setup: Body
}

export const KnowledgeCard = ({ setup }: KnowledgeCardProps) => {
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

export const KnowledgeContainer = ({ setup }: KnowledgeContainerProps) => {
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
        {setup.map((e, i) => (
          <SwiperSlide key={i} className="p-5 pb-10 2xl:p-10">
            <div className="mb-10">
              <h3 className="uppercase text-xl 2xl:text-center 2xl:text-3xl">
                {e.title}
              </h3>
              <div className="mt-8 grid grid-cols-2">
                {e.body.map((e, i) => (
                  <KnowledgeCard key={i} setup={e} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default KnowledgeCard
