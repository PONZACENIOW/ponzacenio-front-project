export const EducationContainer = ({
  setup = {
    institutes: [],
  },
}) => {
  return (
    <div className="mx-5 sm:mx-20 lg:mx-40 2xl:mx-80 p-5 bg-slate-500/10 rounded-3xl shadow-2xl text-gray-300 mt-12 2xl:mt-20 2xl:p-10 2xl:grid 2xl:grid-cols-2 justify-items-center">
      {setup.institutes.map((e, i) => (
        <div key={i} className="flex gap-4">
          <div className="w-4 h-4 bg-amber-400/30 rounded-full grid justify-center content-center mt-1">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
          </div>
          <div className="grid">
            <span>{e.careeer}</span>
            <span>{e.title}</span>
            <span className="bg-black/30 shadow-2xl px-2 text-xs mt-2">
              ({e.cycle})
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EducationContainer
