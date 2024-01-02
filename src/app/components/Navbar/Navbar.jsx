import React from 'react'
import Link from 'next/link'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='hidden md:flex flex-row justify-around items-center gap-[95%] '>
      <h1 className='font-extrabold text-3xl'>
        <Link href={'/'} className='rainbow-text'>
          Unwritten
        </Link>
      </h1>
      <div className='flex text-xl gap-7 font-semibold items-center'>
        <input 
        className=' rounded-[30px] py-1 px-5 border-gray-500 border-2'
        type="text" 
        placeholder='Search' />
        <Link href={'/'}>
          Home
        </Link>
        <Link href={'/About'}>
          About
        </Link>
        <Link href={'/'}>
          Contact
        </Link>

      </div>

    </nav>

  )
}

export default Navbar