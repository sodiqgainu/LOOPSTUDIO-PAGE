import React from 'react'
import Navbar from '../navbar/Navbar'
import './section1.css'

const Section1 = () => {
  return (
    <div className='wrapper w-full pb-10 '>
        <Navbar/>

<div className=' lg:flex lg:justify-start lg:ml-[170px] md:flex md:justify-center block  mt-[70px] px-5 '>
        <div className=' md:text-left  p-20 text-white md:text-7xl font-thin border border-white text-center text-4xl'>
          <span>IMMERSIVE</span>
          <span>EXPERIENCES</span>
          <span>THAT DELIVER</span>
        </div>

  </div>
    </div>
  )
}

export default Section1