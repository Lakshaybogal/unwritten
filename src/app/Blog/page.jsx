import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Card from "@/components/Card/page";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer/page";

const Blogs = () => {

  const title = "Unlocking the Power of Next.js: A Journey into Modern Web Development"
  const paragraph = "Next.js, the dynamic React framework, is a game-changer in the world of web development, seamlessly blending simplicity with powerful features. From its effortless setup to the magic of Server-Side Rendering, Next.js empowers developers to create fast, interactive, and SEO-friendly applications. The component-based architecture enhances code organization and reusability, while dynamic routing and data fetching open doors to dynamic, data-driven experiences. With built-in optimizations for performance and straightforward API integration, Next.js is a versatile tool. Whether you're a beginner or a seasoned developer, embracing Next.js unlocks a future where building modern web applications is not just efficient but a joyous journey into the heart of cutting-edge development."

  const cards = [
    {
      image: "image1.jpg",
      title: "First Page",
      context: "lorem kjejeijf sajdhhfi ihfdhdi",
      link: "Rahi"
    },
    {
      image: "image2.jpg",
      title: "Another Page",
      context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "Another"
    },
    {
      image: "image3.jpg",
      title: "Third Page",
      context: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "Third"
    },
    {
      image: "image4.jpg",
      title: "Fourth Page",
      context: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      link: "Fourth"
    }
  ];


  return (
    <>
      <Navbar />
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
        <aside className="flex flex-col mt-10">
          <h2 className="text-xl font-bold p-2">Recommended</h2>
          <div className="p-1 flex flex-col gap-1">
            {cards.map((card, index) => (
              <Card key={index} image={card.image} title={card.title} context={card.context} link={card.link} />
            ))}
          </div>

        </aside>

      </section>
      <div className="p-10 flex flex-row gap-1">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} context={card.context} link={card.link} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
