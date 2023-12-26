import React from "react";

import Link from "next/link";
import Image from "next/image"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/page";

const Login = () => {
  // const router=useRouter();
  // const handleSubmit=(e)=>{
  // e.preventDefault();
  // router.push();

  // }
  return (
    <>
  
<Navbar/>
  <div className="flex items-center h-screen ">
      <form className="  w-[30%] flex flex-col border-gray-700 rounded-lg p-10 m-20 shadow-lg">
       
        <h1 className="font-bold text-4xl pb-2 ">Register</h1>
        <span className="pb-10 font-light">Already have an account? <Link href="/Login" className="underline text-blue-700 font-normal">Login</Link></span>

        <h1 className="font-semibold pb-2">Full Name</h1>
        <input type="text" placeholder="Rahi chauhan"className="py-3 border-3 border-solid rounded-lg border-gray-500"/>
      
          <h1 className="font-semibold pb-2 pt-10">Email Address</h1>
          <input type="text" name="email" placeholder="you@example.com" className="py-3 border-3 border-solid rounded-lg border-gray-500 " />
          <h1 className="pt-10 pb-2 font-semibold flex justify-between">
            Password<Link href="/" className="text-blue-700 font-normal cursor-pointer underline">Forgot Password?</Link>
          </h1>
          <input type="password" name="password" placeholder="Enter password" className="py-3 border-3 border-solid rounded-lg border-gray-500" /> 
         

         
          <button className=" bg-blue-700 px-20 py-3 rounded-lg font-medium text-white text-2xl mt-10 " >Register</button>
        

          
      </form>
      <div className="flex flex-row ">
      <Image src="/register.jpg" width={700} height={500}/>
      </div>
      </div>
      <Footer/>
      
    </>
  );
};

export default Login;
