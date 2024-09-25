import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import {  FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
  <>
  <div className='bg-black'>
    <div className='max-w-[1200px] px-10 py-24 mx-auto foot-container  flex md:flex-row flex-col gap-[30px] justify-between  text-white items-center'>
       <div className='first-foot flex  flex-col gap-[30px] items-center md:items-start '>
         <h1 className='font-extrabold text-3xl'>loopstudios</h1>
         <div className='flex md:flex-row flex-col gap-[30px] font-bold'>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
         </div>
       </div>

       <div className='second-foot flex flex-col gap-[30px]'>
           <div className='flex md:justify-end gap-5 text-2xl justify-center'>
              <a href='#'><FaFacebook/></a>
              <a a href='#'><FaTwitter/></a>
              <a a href='#'><FaPinterest/></a>
              <a href="#"><FaInstagram/></a>
           </div>

           <div>
            <p> © 2021 Loopstudios. All rights reserved</p>
           </div>
       </div>
    </div>
  </div>
  </>
  )
}

export default Footer