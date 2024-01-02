import Link from 'next/link'
import React from 'react'

// import Layout from './Layout'

const Footer = () => {
 
  
  return (
<footer className='w-full border border-dark border-solid bg-blue-600 text-white  '>
    <div className='flex flex-row'>
    
        <div className='flex flex-row items-center'>
            
        <ul className='flex flex-col items-center mt-6 pl-20 ml-20'>
        <li><h1 className='font-extrabold mb-3'>Quick Links</h1></li>
        <li><Link href="/">Home</Link></li> 
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>

            
        </ul>
       
        <ul className='flex flex-col mt-6 items-center pl-10'>
         <li><h1 className='font-extrabold mb-3'>Site Map</h1></li>
         <li><Link href="/">Blogs</Link></li> 
        <li><Link href="/about">Help</Link></li>
        <li><Link href="/contact">Terms</Link></li>
        </ul>
       
    </div>
    <div className='flex flex-col pl-[40%] pt-6'>
        <h1 className='font-extrabold'>Newsletter</h1>
        <div className='flex flex-row gap-6'> 
        <input type="text" placeholder='Enter your email' className='font-light py-2 px-2 ' />
        <button className="py-2 px-4 bg-white text-black font-light rounded-lg cursor-pointer">Send</button>

        </div>
        
        <div className='flex flex-row'>
            <li></li>
        </div>
    </div>
  
    </div>
    <div className='flex items-center pl-[40%] pb-4 font-extralight text-sm'>{new Date().getFullYear()}&copy; All Rights Reserved.</div>


</footer>
  )
}

export default Footer