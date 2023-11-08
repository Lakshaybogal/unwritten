"use client"
import React from "react";
import Carousel from "../../components/HomePage/Carousel";
import Card from "@/components/Card/page";
import '@/utili/pages.css'

const Home = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap pt-10 justify-between">
        <div className="p-10">
          <h1 className=" hero_heading text-5xl font-bold ">
            Your daily dose of
            inspiration and insight
          </h1>
          <p className="font-normal pt-5">
            Experience the power of knowledge
          </p>
          <button className=" mt-5 bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg">
            Explore Now
          </button>
          <ul className="flex flex-row font-light pt-7">
            <li className="mr-4 flex flex-col"> <span className="text-blue-700 font-bold mr-6 ">+394</span>Subscribe</li>
            <li className="mr-4 flex flex-col"> <span className="text-blue-700 font-bold mr-6 ">+394</span>Readers</li>
            <li className="mr-4 flex flex-col"> <span className="text-blue-700 font-bold mr-6 ">+394</span>Writers</li>
          </ul>
        </div>

        <img src="/image2.jpg" className="  w-[50%]" />

      </div>

      {/* <div className="flex flex-row justify-between mt-10 bottom-4 m-1">
        <button className="border border-gray-400 rounded-lg px-3 py-1 hover:bg-gray-400">All</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">DSA</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">React</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">Python</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">Next</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">HTML</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">CSS</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">Angular</button>

      </div> */}
      <Carousel />
      <Card/>
    </>
  );
};

export default Home;
