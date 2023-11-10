
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


const Card = ({ image, link, title, context }) => {

  return (
    <div className=' border-2 border-solid  border-#e0e0e0 rounded-lg flex flex-col p-2 h-72 w-56 gap-1'>

      <Image
        src={`/${image}`}
        alt="img"
        layout="responsive"
        width={208}
        height={208}
        className='rounded-lg'
      />

      <div className='pl-1'>
        <h1 className=' text-base font-semibold'>{title}</h1>
        <p className=' text-xs font-light'>{context}</p>

      </div>
      <Link
        className='p-2 w-fit text-xs bg-blue-700 font-medium text-white rounded-lg'
        href={`/Blog/${link}`}>
        Read Me
      </Link>

    </div>
  );
}

export default Card