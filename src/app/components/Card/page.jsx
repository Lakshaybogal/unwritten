
import React from 'react'
import Link from 'next/link'


const Card = () => {
  return (
    <div className='flex flex-col mr-20'>
          <div className=' border-2 border-solid  border-#e0e0e0 w-80 p-4 mb-5 ml-10 rounded-lg'>
     
      <img src="/image1.jpg" alt="omg" className=' border border-solid  border-#e0e0e0 rounded-lg '/>
      <h1 className='text-xl font-bold pt-2'>This is a title of a post</h1>
      <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam assumenda maxime accusantium?</p>
      <Link href="/Pages/Blog/Rahi"> <button className='py-2 px-3 bg-blue-700 font-bold text-white mt-5 rounded-lg'>
      Read Me</button></Link>
      </div>

      <div className=' border-2 border-solid  border-#e0e0e0 w-80 p-4 mb-5 ml-10 rounded-lg'>
      
      <img src="/image1.jpg" alt="omg" className=' border border-solid  border-#e0e0e0 rounded-lg '/>
      <h1 className='text-xl font-bold pt-2'>This is a title of a post</h1>
      <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam assumenda maxime accusantium?</p>
      <Link href="/Pages/Blog/Lakshay "><button className='py-2 px-3 bg-blue-700 font-bold text-white mt-5 rounded-lg'>
      Read Me</button></Link>
      </div>

      <div className=' border-2 border-solid  border-#e0e0e0 w-80 p-4 mb-5 ml-10 rounded-lg'>
      
      <img src="/image1.jpg" alt="omg" className=' border border-solid  border-#e0e0e0 rounded-lg '/>
      <h1 className='text-xl font-bold pt-2'>This is a title of a post</h1>
      <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam assumenda maxime accusantium?</p>
      <Link href="/Pages/Blog/Disha"><button className='py-2 px-3 bg-blue-700 font-bold text-white mt-5 rounded-lg'>
      Read Me</button></Link>
      </div>
      <div className=' border-2 border-solid  border-#e0e0e0 w-80 p-4 mb-5 ml-10 rounded-lg'>
      
      <img src="/image1.jpg" alt="omg" className=' border border-solid  border-#e0e0e0 rounded-lg '/>
      <h1 className='text-xl font-bold pt-2'>This is a title of a post</h1>
      <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam assumenda maxime accusantium?</p>
      <button className='py-2 px-3 bg-blue-700 font-bold text-white mt-5 rounded-lg'>
      Read Me</button>
      </div>
      <div className=' border-2 border-solid  border-#e0e0e0 w-80 p-4 mb-5 ml-10 rounded-lg'>
      
      <img src="/image1.jpg" alt="omg" className=' border border-solid  border-#e0e0e0 rounded-lg '/>
      <h1 className='text-xl font-bold pt-2'>This is a title of a post</h1>
      <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam assumenda maxime accusantium?</p>
      <button className='py-2 px-3 bg-blue-700 font-bold text-white mt-5 rounded-lg'>
      Read Me</button>
      </div>
    </div>
   
  )
}

export default Card