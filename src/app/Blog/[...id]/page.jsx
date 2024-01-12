import { getPosts } from '@/../../lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

const Blog = async ({ params }) => {
  const postId = params.id[0];
  const posts = await getPosts();
  const singlePost = posts.find((post) =>
    post._id === postId
  )
  return (

    <div className='flex flex-col justify-center items-center gap-1'>
      <h1 className='text-6xl font-bold p-5'>
        {singlePost.title}
      </h1>
      <div className='w-[70vw] p-4'>
        <Image src={singlePost.image}
          layout='responsive'
          width={100} height={100} alt="Loading" />
      </div>
      <div className="text-2xl font-semibold">
        {singlePost.author.name}
      </div>
      <div className='px-12 text-xl pt-4 text-center'>
        <PortableText value={singlePost.content} />
      </div>

    </div>
  )
}

export default Blog