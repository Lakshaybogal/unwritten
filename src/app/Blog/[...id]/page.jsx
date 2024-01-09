import React from 'react'
import { getPosts } from '@/../../lib/client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

const Blog = async ({ params }) => {
  const postId = params.id[0];
  const posts = await getPosts();
  const singlePost = posts.find((post) =>
    post._id === postId
  )
  return (

    <div className='flex flex-col mt-10 py-7'>
      {singlePost.title}
      <Image src={singlePost.image} 
     width={100} height={100} alt = "Loading"/>
      {singlePost.author.name}
      <PortableText value={singlePost.content} />
    </div>
  )
}

export default Blog