import Image from "next/image";
import { getPosts } from "../../../lib/client";
import Card from '../components/Card/page';

const Blogs = async () => {

  const title = "Unlocking the Power of Next.js: A Journey into Modern Web Development"
  const paragraph = "Next.js, the dynamic React framework, is a game-changer in the world of web development, seamlessly blending simplicity with powerful features. From its effortless setup to the magic of Server-Side Rendering, Next.js empowers developers to create fast, interactive, and SEO-friendly applications. The component-based architecture enhances code organization and reusability, while dynamic routing and data fetching open doors to dynamic, data-driven experiences. With built-in optimizations for performance and straightforward API integration, Next.js is a versatile tool. Whether you're a beginner or a seasoned developer, embracing Next.js unlocks a future where building modern web applications is not just efficient but a joyous journey into the heart of cutting-edge development."
  const cards = await getPosts();

  return (
    <>
      <section className="flex">
        <div className='flex flex-col items-center p-10'>
          <h1 className="text-3xl font-semibold inline-10">
            {title}
          </h1>
          <Image src="/image2.jpg"
            width={500}
            height={500}
            alt="Image" />
          <p>
            {paragraph}
          </p>
        </div>
      </section>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold p-2">Blogs</h2>
        <div className="p-1 flex flex-col md:flex-row gap-1 justify-center ">
          {cards.map((card) => (
            <div key={card._id}>
              <Card postData={card} />
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Blogs;
