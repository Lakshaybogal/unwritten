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
      <form className="  w-[30%] flex flex-col border-gray-700 rounded-lg p-10 m-20 shadow-lg ">
        <h1 className="font-bold text-4xl pb-2 ">Login</h1>
        <span className="pb-10 font-light">Doesn't have an account yet? <Link href="/Registration" className="underline text-blue-700 font-normal">Sign up</Link></span>
          <h1 className="font-semibold pb-2">Email Address</h1>
          <input type="text" name="email" placeholder="you@example.com" className="py-3 border-3 border-solid rounded-lg " />
          <h1 className="pt-10 pb-2 font-semibold flex justify-between">
            Password<Link href="/" className="text-blue-700 font-normal cursor-pointer underline">Forgot Password?</Link>
          </h1>
          <input type="password" name="password" placeholder="Enter password" className="py-3 border-3 border-solid rounded-lg" />
          
          <div className="flex items-center py-5">
  <input type="checkbox" id="rememberMe" className=" h-5 w-5 bg-blue-700" />
  <label htmlFor="rememberMe" className="ml-2 text-gray-800">Remember me</label>
</div>

          
          
          <button className=" bg-blue-700 px-20 py-3 rounded-lg font-medium text-white text-2xl " >Login</button>
         
          <span className="font-extralight flex justify-center py-4">or login with</span>
          <button className="border-4 border-solid border-red-600 rounded-lg font-medium text-2xl text-red-600 py-2 px-3">
  <div className="flex items-center justify-center">
    <img src="/google.svg" alt="Google Logo" width={30} height={30} />
    <span className="ml-4">Google</span>
  </div>
</button>

          
      </form>
      <div className="flex flex-row ">
      <Image src="/login6.jpg" width={700} height={500}/>
      </div>
      </div>
      <Footer/>
      
    </>
  );
};

export default Login;
