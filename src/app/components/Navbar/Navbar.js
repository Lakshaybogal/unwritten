import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className=''>
      
       <ul className='flex flex-row text-xl justify-start pt-7 gap-4 cursor-pointer ml-[3%]'>
           <li className='rainbow-text  text-2xl font-extrabold mr-2 '>Unwritten</li>
           <li className='mr-2 '><a href="/">Home</a></li> 
           <li className='mr-2'><a href="/blog">Blog</a></li>
           <li className='mr-2'><a href="/about">About Us</a></li>
           <li className='mr-2'><a href="/contact">Contact</a></li>
        </ul>
    </div>

  )
}

export default Navbar