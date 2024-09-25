import React from 'react'
import './Section2.css'
import interactive  from '../../images/desktop/image-interactive.jpg'
import gsap from 'gsap'
import { Parallax } from 'react-parallax'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {

useGSAP(()=>{

    

    ScrollTrigger.create({
        trigger:'.section',
        scrub:true,
        start: 'top center',
       
       onEnter: () => {
        gsap.to('.first',{
            x:0,
            opacity:1,
            delay:0.3,
            duration:2
        })

        gsap.to('.second',{
            x:0,
            opacity:1,
            duration:2,
            delay:0.5
        })
       },

       onLeaveBack:() => {
        gsap.to('.first',{
            x:-1000,
            opacity:1,
            delay:0.3,
            duration:2
        })

        gsap.to('.second',{
            x:1000,
            opacity:1,
            duration:2,
            delay:0.5
        })
       }
    })
  
})

  return (
    <div className='max-w-[1300px] mx-auto py-[70px] px-[30px] section '>
       <div>
        <Parallax bgImage={interactive} strength={500}  className=' first'>
            <div className=' w-[100%] h-[400px] bg-transparent text-white  '></div>
        </Parallax>
       </div>
         
        <div className='second bg-white shadow-md'>
           <span className='md:text-5xl text-4xl font-thin uppercase'>The leader in</span> 
           <span className='md:text-5xl text-4xl font-thin uppercase'>interactive VR</span>

           <p className='mt-10 text-slate-500'>
           Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.
           </p>
        </div>
    </div>
  )
}

export default Section2