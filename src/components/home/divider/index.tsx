interface Setup {
  title: string
}

type DividerProps = {
  setup: Setup
  icon: JSX.Element
}

export const Divider = ({ setup, icon }: DividerProps) => {
  return (
    <div className="mx-5 sm:mx-20 lg:mx-40 2xl:mx-80  mt-12 2xl:mt-20 relative grid sm:grid-cols-3 justify-items-start">
      <div className="h-12 bg-gradient-to-l from-transparent via-gray-900 to-transparent absolute self-center w-full"></div>
      <div className="flex items-center justify-center gap-4 -top-2 sm:col-start-2 z-10">
        <div className="w-16 h-16 rounded-full bg-amber-300/10 p-2">{icon}</div>
        <h2 className="uppercase text-xl 2xl:text-center 2xl:text-3xl text-gray-200">
          {setup.title}
        </h2>
      </div>
    </div>
  )
}

export default Divider
