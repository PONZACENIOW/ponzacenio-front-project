import { Fragment } from 'react'

export const AptitudesContainer = ({ setup = { titles: [] } }) => {
  return (
    <div className="p-5 bg-slate-500/10 rounded-3xl shadow-2xl text-gray-300 mt-12 2xl:mt-20 text-justify mx-5 sm:mx-20 lg:mx-40 2xl:mx-80 2xl:p-10 grid grid-cols-2-iauto gap-4 2xl:grid-cols-2-iauto">
      {setup.titles.map((e, i) => (
        <Fragment key={i}>
          <div className="w-4 h-4 bg-amber-400/30 rounded-full grid justify-center content-center mt-1">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
          </div>
          <span className="font-mono">{e}</span>
        </Fragment>
      ))}
    </div>
  )
}

export default AptitudesContainer
