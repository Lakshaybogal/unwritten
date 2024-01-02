"use client"
import Carousel from "@/components/HomePage/Carousel";
import '@/utili/home.css';
import Image from 'next/image';
import Animation from '../components/Animations/HeroSection';
import {LuBrainCircuit} from "react-icons/lu";
const Home = () => {
  const perks = [
    {
      icon :<LuBrainCircuit/>,
      title: "Learning",
      img: "/image2.jpg",
      desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      icon :<LuBrainCircuit/>,
      title: "Learning",
      img: "/image2.jpg",
      desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      icon :<LuBrainCircuit/>,
      title: "Learning",
      img: "/image2.jpg",
      desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ]
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row flex-wrap pt-10 justify-between items-center">
        <div className="flex flex-col">
          <h1 className=" blur_bg hero_heading text-4xl lg:text-7xl font-bold ">
            Your daily dose of
            inspiration and insight
          </h1>
          <p className="text-xl lg:text-2xl font-normal pt-5">
            Experience the power of knowledge
          </p>
          <button className=" text-xl lg:text-2xl mt-3 w-[50%] lg:w-[30%] bg-blue-700 text-white font-semibold py-2 px-2 rounded-lg">
            Explore Now
          </button>
          <ul className="flex flex-row font-light pt-7 gap-2  ">
            <li className="text-xl lg:text-2xl flex flex-col"> <span className="text-blue-700 font-bold">+394</span>Subscribe</li>
            <li className="text-xl lg:text-2xl flex flex-col"> <span className="text-blue-700 font-bold">+394</span>Readers</li>
            <li className="text-xl lg:text-2xl flex flex-col"> <span className="text-blue-700 font-bold">+394</span>Writers</li>
          </ul>
        </div>
        <div className=" lg:w-[45%]">
          <Animation />
        </div>
      </div>
      <section className="blur_bg flex flex-col justify-center items-center py-5">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-700">2X Your knowledge</h1>
        <div className="flex flex-col lg:flex-row lg:p-5 ">
          {
            perks.map((perk) => {
              return (
                <div
                  className="p-3"
                  key={perk.img}>
                  <div className="flex items-center gap-1 text-3xl font-semibold p-2">
                    <span>
                      {perk.icon}
                    </span>
                  
                  <h2 >
                    {
                      perk.title
                    }
                  </h2>
                  </div>
                  <div className="p-2">
                  <Image src={perk.img} 
                  layout = 'responsive'
                  style = {{
                    borderRadius : "10px",
                  }}
                  width={100} height={100} 
                  alt='' />
                  </div>
                  <p className=" text-lg font-medium p-2">
                    {perk.desc}
                  </p>
                </div>
                )
            })
          }
        </div>
      </section>
      <Carousel />

    </>
  );
};

export default Home;
