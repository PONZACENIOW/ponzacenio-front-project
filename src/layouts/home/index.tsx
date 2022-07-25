import React from 'react'
import Head from 'next/head'

const HomeLayout = ({ setup, children }) => {
  return (
    <>
      <Head>
        <title>{`PONZACENIO | ${setup.title}`}</title>
      </Head>
      <div className="min-h-screen py-10 2xl:py-20 bg-gradient-to-l from-gray-900 to-gray-800">
        {children}
      </div>
    </>
  )
}

export default HomeLayout
