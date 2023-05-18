import React from 'react'

const Page = ({tag}) => {
  return (
    <div className='bg-white md:py-7 text-center items-center'>
     <h1 className='md:text-4xl text-2xl text-clr uppercase  shadow-lg pb-5 pt-2'>{tag}</h1>
    </div>
  )
}

export default Page