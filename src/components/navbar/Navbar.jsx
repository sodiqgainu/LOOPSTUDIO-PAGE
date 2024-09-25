import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

const [toggle, setToggle] = useState(false)

const Toggler = () => {
    setToggle(!toggle)
}

  return (
    <div className='flex md:justify-around justify-between px-7 py-16 items-center text-white '>
        <div className='heading'>
            <h1 className='text-4xl font-bold'>loopstudios</h1>
        </div>

        <div className=' links md:flex hidden gap-[25px]'>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
        </div>
        
        <div className={`hidden-links ${toggle ? 'show' : 'hide'} `}>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
        </div>

        <div onClick={Toggler} className='menu'>
            {
                toggle ? <FaTimes size={25} /> : <FaBars size={25}/>
            }
        </div>
    </div>
  )
}

export default Navbar