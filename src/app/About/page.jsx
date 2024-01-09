"use client"
import Image from "next/image";
import Animation from "@/components/Animations/HeroSection";
const page = () => {
  return (
    <>
      <div className="flex pt-10 justify-center items-center">
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
        <Image src="/about.jpg" width={700} height={600} className="mb-30" />

      </div>

      {/* <Image src="/contact1.png" width={200} height={200} className="bg-white"/> */}
      <h1 className="text-4xl flex justify-center font-extrabold text-blue-700">CONTACT US</h1>

      <h1 className="flex justify-center text-2xl font-bold pt-11">Get in Touch With Us</h1>
      <h1 className="flex justify-center pt-2">We're here to answer any question you may have.</h1>
      <div className="flex flex-row ml-20">
        <div className="flex flex-col ml-20 mt-20 items-center">
          <Image src="/email.png" width={50} height={50} className="pb-4" />
          <h1 className="text-xl font-bold">Email</h1>

          <h1 className="text-gray-500">rahichauhan37@gmail.com</h1>
          <h1 className="text-gray-500">lakshaybogal37@gmail.com
          </h1>

          <Image src="/phone.jpg" width={70} height={70} className="mt-20" />
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
          <input type="text" placeholder="you@gmail.com" className="p-3  bg-gray-300 rounded-md" />
          <h1 className="mt-6">Phone</h1>
          <input type="text" placeholder="912673839" className="p-3  bg-gray-300 rounded-md" />
          <h1 className="mt-6">Message</h1>
          <textarea name="Message" id="Message" cols="30" rows="5" placeholder="what can we help you with?" className="p-3 mb-10  bg-gray-300 rounded-md"></textarea>
          <button className="py-2 px-3 bg-blue-700 text-white font-bold w-20 ml-4 mb-4 rounded-lg shadow-lg ">Submit</button>
        </form>
      </div>

    </>
  );
};

export default page;
