import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/page";
import Image from "next/image";


const page = () => {
  return (
    <>
      <Navbar />

      <div className="mt-12">
        <h1 className="flex items-center justify-center text-3xl">
          We Are <span className="font-bold pl-1 text-blue-700">UnWritten</span>
        </h1>
        <h2 className="flex items-center justify-center font-normal pt-3">
          {" "}
          Providing you with the most Engaging and Valuable content for your
          reading pleasure.
        </h2>
      </div>
      <div className="flex flex-row ">
        <Image src="/about.jpg" width={700} height={600} className="mb-30"/>
        <p className="pt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quia.
          Asperiores ipsam hic nemo enim facere rerum sapiente quia
          exercitationem eius voluptatum magni doloremque fuga maxime illum
          possimus, modi animi vero tenetur? Architecto dolor libero laboriosam
          illum, nulla consectetur iure, veritatis adipisci modi porro ut saepe
          eveniet, voluptate alias nemo nobis atque reprehenderit harum sapiente
          optio nihil incidunt perferendis? Itaque omnis laboriosam dolorem
          cupiditate neque ex, sunt iusto distinctio reiciendis molestias atque,
          nulla ea rerum sequi! Reiciendis vitae repellendus sit cum, corrupti
          iste deserunt consequatur dolores velit maiores magnam tempora nemo?
          Fugiat accusantium quas obcaecati eveniet id ratione voluptate animi
          quam tenetur alias ab, ipsum maxime dicta sapiente, odio unde. Nobis
          eos illo id atque optio veniam quam corrupti sapiente minima dolores
          deserunt, amet earum eveniet suscipit eum quaerat fugiat perspiciatis!
          Sequi quidem quod a voluptate ducimus numquam reiciendis tempore fugit
          velit cumque. Sunt non fugit aspernatur, similique ut inventore
          reprehenderit placeat dolores est ipsa quibusdam itaque doloribus
          exercitationem saepe et pariatur! Vel iure consectetur provident
          saepe, illo exercitationem minus omnis accusamus dolore atque officiis
          velit quibusdam repellat reprehenderit corporis in natus veniam
          quaerat neque. Facere itaque perspiciatis, a fugit asperiores magnam
          quisquam odit iste nemo cumque. Sit, magni facilis.
        </p>
      </div>
      
      {/* <Image src="/contact1.png" width={200} height={200} className="bg-white"/> */}
      <h1 className="text-4xl flex justify-center font-extrabold text-blue-700">CONTACT US</h1>
    

     <h1 className="flex justify-center text-2xl font-bold pt-11">Get in Touch With Us</h1>
     <h1 className="flex justify-center pt-2">We're here to answer any question you may have.</h1>
       <div className="flex flex-row ml-20">
       <div className="flex flex-col ml-20 mt-20 items-center">
        <Image src="/email.png" width={50} height={50} className="pb-4"/>
        <h1 className="text-xl font-bold">Email</h1>
        
        <h1 className="text-gray-500">rahichauhan37@gmail.com</h1>
        <h1 className="text-gray-500">lakshaybogal37@gmail.com
        </h1>
        
        <Image src="/phone.jpg" width={70} height={70} className="mt-20"/>
        <h1 className=" text-xl font-bold">Phone</h1>
        <h1 className="text-gray-500">9373559666</h1>
        <h1 className="text-gray-500">9256739846</h1>
        
       </div>
       

      
       <div className="border-l-4 border-gray-400 h-80 mt-[8%] ml-[10%]"></div>
      
      <form className="flex justify-center flex-col border-gray-700 rounded-lg shadow-lg mb-10 w-[30%] mx-auto p-5 mt-20 ">
      <h1 className=" flex justify-center mt-6 mb-6 text-2xl font-bold text-blue-700">Your Details</h1>
        <h1 className="mt-6">Name*</h1>
      <input type="text" placeholder="Rahi Chauhan" className="p-3 bg-gray-300 rounded-md" />
      <h1 className="mt-6">Email*</h1>
        <input type="text" placeholder="you@gmail.com" className="p-3  bg-gray-300 rounded-md"/>
        <h1 className="mt-6">Phone</h1>
        <input type="text" placeholder="912673839" className="p-3  bg-gray-300 rounded-md"/>
        <h1 className="mt-6">Message</h1>
        <textarea name="Message" id="Message" cols="30" rows="5" placeholder="what can we help you with?" className="p-3 mb-10  bg-gray-300 rounded-md"></textarea>
        <button className="py-2 px-3 bg-blue-700 text-white font-bold w-20 ml-4 mb-4 rounded-lg shadow-lg ">Submit</button>
      </form>
      </div>
      <Footer />
    </>
  );
};

export default page;
