"use client"
import React from "react";
import Navbar from "../Navbar/Navbar";
import { useRef } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";



const Home = () => {
  return (
    <>
      <Navbar />
      <div className="">
      <div className=" mt-20 ml-20 text-xl font-bold ">
        Your daily dose of
        <br />
        inspiration and insight
      </div>
      <div className="mt-2 ml-20 font-normal">
        Experience the power of knowledge
      </div>
      <div className=" ">
      <img src= "/image2.jpg" className="  w-[30%]"/>
      </div>
      </div>
     
      <button className="mt-10 ml-20 bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg">
        Explore Now
      </button>
     
      <div className="">
        <ul className="flex flex-row ml-20 mt-11 text-blue-700 font-bold ">
          <li className="mr-6 ">+394</li>
          <li className="mr-6 ml-5">+578</li>
          <li className="mr-6 ml-6">+437</li>
        </ul>
        <ul className="flex flex-row ml-20 mt-1 font-light">
          <li className="mr-4">Subscribe</li>
          <li className="mr-4">Readers</li>
          <li className="mr-4">Writers</li>
        </ul>
      </div>
      
      <div className="flex flex-row justify-between mt-10 bottom-4 m-1">
        <button className="border border-gray-400 rounded-lg px-3 py-1 hover:bg-gray-400">All</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">DSA</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">React</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">Python</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">Next</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">HTML</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">CSS</button>
        <button className="border border-gray-400 rounded-lg px-3 py-1  hover:bg-gray-400">Angular</button>

      </div>
      <Carousel/>
      <Footer/>
     
     
    </>
  );
};

export default Home;
