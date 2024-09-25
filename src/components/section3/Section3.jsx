import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './Section3.css'
import earth from '../section3/image-deep-earth.jpg'
import arcade from '../section3/image-night-arcade.jpg'

import soccer from '../section3/image-soccer-team.jpg'

import grid from '../section3/image-grid.jpg'

import above from '../section3/image-from-above.jpg'

import pocket from '../section3/image-pocket-borealis.jpg'

import curiosity from '../section3/image-curiosity.jpg'

import fisheye from '../section3/image-fisheye.jpg'
import { Parallax } from 'react-parallax'
const Section3 = () => {
  return (
    <div className='max-w-[1300px] mx-auto px-5 py-[100px]'>
        <div className='flex justify-between  items-center'>
          <h2 className='md:text-5xl font-normal text-2xl '>OUR CREATIONS</h2>

          <div className='border border-blue-900 py-1 px-7 cursor-pointer'>
            <h2 className='md:text-3xl  font-normal text-xl'>SEE ALL</h2>
          </div>
        </div>
{/* gallery */}
        <div className='text-white uppercase  gallery text-4xl font-thin'>
        <Parallax bgImage={earth} strength={250} className='rounded-md' >
            <div className=' first-img  bg-black text-white  '><h2>Deep earth</h2></div>
        </Parallax>
            
        <Parallax bgImage={arcade} strength={250}  >
            <div className=' second-img w-[100%] h-[400px] bg-transparent text-white  '><h2>night arcade</h2></div>
        </Parallax>
        <Parallax bgImage={soccer} strength={250}  >
            <div className=' third-img w-[100%] h-[400px] bg-transparent text-white  '><h2>soccer team <h2>vr</h2></h2></div>
        </Parallax>
        <Parallax bgImage={grid} strength={250}  >
            <div className=' fourth-img w-[100%] h-[400px] bg-transparent text-white  '><h2>the grid</h2></div>
        </Parallax>
        <Parallax bgImage={above} strength={250}  >
            <div className='fifth-img w-[100%] h-[400px] bg-transparent text-white  '><h2>from up <h2>above vr</h2></h2> </div>
        </Parallax>
        <Parallax bgImage={pocket} strength={250}  >
            <div className=' sixth-img w-[100%] h-[400px] bg-transparent text-white  '><h2>pocket <h2>borealis</h2></h2></div>
        </Parallax>
        <Parallax bgImage={curiosity} strength={250}  >
            <div className=' seventh-img w-[100%] h-[400px] bg-transparent text-white  '><h2>the <h2>curiosity</h2></h2></div>
        </Parallax>
        <Parallax bgImage={fisheye} strength={250}  >
            <div className=' eighth-img w-[100%] h-[400px] bg-transparent text-white  '><h2>make it <h2>fisheye</h2></h2></div>
        </Parallax>
        </div>
    </div>
  )
}

export default Section3