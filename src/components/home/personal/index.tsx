import {
  GitHubIcon,
  EmailIcon,
  PhoneIcon,
  AddressIcon,
} from '@/components/Icons'
import styles from '@styles/Home.module.css'
import Image from 'next/image'

interface Setup {
  name: string
  github: string
  email: string
  phone: string
  address: string
}

type PersonalProps = {
  setup: Setup
}

export const PersonalContainer = ({ setup }: PersonalProps) => {
  return (
    <div className="mt-12 bg-blue-600/10 shadow-2xl text-gray-100 relative grid justify-items-center 2xl:justify-items-start">
      <div className="w-52 h-52 2xl:w-60 2xl:h-60 border-amber-200 rounded-full mx-auto border-4 grid justify-center content-center shadow-2xl absolute -top-10 2xl:ml-80">
        <div className="w-[12.5rem] h-[12.5rem] 2xl:w-[14.5rem] 2xl:h-[14.5rem] bg-gradient-to-l from-gray-900 to-gray-800 rounded-full mx-auto border-4 border-transparent">
          <div className={styles.container_image}>
            <Image
              className={`rounded-full ${styles.image}`}
              src="/img/me/ponzacenio.jpg"
              alt="ponzacenio"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="mt-36 2xl:mt-4">
        <div className="bg-gradient-to-l from-transparent via-[#101010] to-transparent mb-8 pt-8 pb-4 2xl:pb-8 2xl:px-80">
          <div className="2xl:pl-64">
            <h1 className="uppercase text-center font-bold text-3xl 2xl:text-5xl font-quicksand text-amber-200 ">
              {setup.name}
            </h1>
          </div>
        </div>
        <div className="px-10 sm:px-20 lg:px-40 2xl:px-80 pb-4">
          <div className="2xl:pl-64">
            <a
              href="https://github.com/PONZACENIOW"
              target="__blank"
              className="grid grid-cols-2-iauto gap-4 items-center hover:bg-gradient-to-r from-gray-900/70 to-gray-800/10 p-2 rounded-full hover:text-center transition ease-in-out delay-150">
              <GitHubIcon className="stroke-amber-200/80 stroke-[1rem] w-8" />
              <h2 className="w-full sm:text-xl">{setup.github}</h2>
            </a>
            <a
              href="mailto:ponzacenio.work@gmail.com"
              className="grid grid-cols-2-iauto gap-4 items-center hover:bg-gradient-to-r from-gray-900/70 to-gray-800/10 p-2 rounded-full hover:text-center">
              <EmailIcon className="stroke-amber-200/80 stroke-[1.5rem] w-8" />
              <h2 className="w-full sm:text-xl">{setup.email}</h2>
            </a>
            <a
              href="tel:5574963573"
              className="grid grid-cols-2-iauto gap-4 items-center hover:bg-gradient-to-r from-gray-900/70 to-gray-800/10 p-2 rounded-full hover:text-center">
              <PhoneIcon className="stroke-amber-200/80 stroke-[1.5rem] w-8" />
              <h2 className="w-full sm:text-xl">{setup.phone}</h2>
            </a>
            <a
              href="https://goo.gl/maps/iUEGRJ7gXqcrCSDy9"
              target="__blank"
              className="grid grid-cols-2-iauto gap-4 items-center hover:bg-gradient-to-r from-gray-900/70 to-gray-800/10 p-2 rounded-full hover:text-center">
              <AddressIcon className="stroke-amber-200/80 stroke-[1.5rem] w-8" />
              <h2 className="w-full sm:text-xl">{setup.address}</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalContainer
