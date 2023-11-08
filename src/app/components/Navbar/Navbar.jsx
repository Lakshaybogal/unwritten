import React from 'react'
import Link from 'next/link'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between py-5'>
      <h1 className='pl-10 font-extrabold text-3xl'>
        <Link href={'/'} className='rainbow-text'>
        Unwritten
        </Link>
      </h1>
      <div className='pr-10 flex gap-7 font-semibold'>
      <Link href={'/'}>
      Home
      </Link>
      <Link href={'/'}>
      About
      </Link>
      <Link href={'/'}>
      Contact
      </Link>
      Search
      </div>
      
    </nav>

  )
}

export default Navbar