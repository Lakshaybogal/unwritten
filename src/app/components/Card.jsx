import Image from 'next/image'
import React from 'react'
import category from '../../../digital-insights-database/schemas/category'
import Link from 'next/link'



const card = ({postData}) => {
  return (
   <>
   <Link href={`/${postData._id}`}>
    <div className='flex flex-col space-y-2 bg-primary-bg w-72 hover:scale-105 transition-transform duration-200 ease-out rounded overflow-hidden'>
    <Image src={postData.image} width={200} height={50}/></div>
    <div className='flex flex-row'>
    <p>
      {postData.author.name},
      {Date(postData.publishedAt) .substring(0,10)}
    </p>
    </div>
    <div>
        <h1>
            Title: {postData.title}
        </h1>
        
    </div>
    <div>
        <p>{postData.body}</p>
    </div>
    <div>
        {postData.categories.map((category)=>(
       <div key={category._id}>
        <p>{category.name}</p>
       </div>

        ))}
    </div>
    </Link>
    </>
    
  )
}

export default card