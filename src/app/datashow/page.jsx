import React from 'react';
import Card from "../components/Card"; // Make sure the filename and component name are both capitalized
import { getPosts } from "../../../lib/client"

const Page = async() => {
    const posts=await getPosts();
    console.log(posts);
  return (
    <>
      <div className='flex flex-col'> BlogSection </div>
      <ul className='flex flex-row flex-wrap justify-evenly space-y-8'>
        {posts.map((post)=>(
            <li key={posts._id}>
          <Card postData={post}/>
        </li>
        
        ))}
        
      </ul>
    </>
  );
}

export default Page;
