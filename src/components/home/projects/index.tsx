import { WebDevelopmentIcon } from '@/components/Icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

interface Setup {
  title: string
  date: string
  duration: number
  durationText: string
  description: string
}

type ProjectsContainerProps = {
  setup: Array<Setup>
}

type ProjectsCardProps = {
  setup: Setup
}

export const ProjectsCard = ({ setup }: ProjectsCardProps) => {
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

export const ProjectsContainer = ({ setup }: ProjectsContainerProps) => {
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
        {setup.map((e, i) => (
          <SwiperSlide
            key={i}
            className="p-5 pb-10 2xl:p-10 grid content-between">
            <ProjectsCard setup={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProjectsCard
