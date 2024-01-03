import React from 'react'
import { getPosts } from '../../../lib/client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

const SingleBlogPost = async({params}) => {
    const postId=params.id[0];
    const posts=await getPosts();
    const singlePost=posts.find((post)=>
post._id === postId
    )
  return (
    
    <div className='flex flex-col mt-10 py-7'>SingleBlogPost
    {singlePost.title}
    <Image src={singlePost.image} width={200} height={50}/>
    {singlePost.author.name}
    <PortableText value= {singlePost.content}/>
    </div>
  )
}

export default SingleBlogPost