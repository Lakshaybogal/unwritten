import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Card from "@/components/Card/page";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row ">
        <div className="flex flex-row">
          <div className="flex flex-col ml-20">
            <h1 className="font-bold text-4xl mt-5 ml-10">
              This is a title of a post...
            </h1>
            <p className="pt-10 ml-10 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo
              adipisci quos ex nobis dolorem, ut neque accusamus non, saepe
              deserunt officiis, ab incidunt expedita! Modi dolores ex quia
              debitis totam distinctio a delectus doloremque nostrum
              necessitatibus eveniet repellendus eaque ipsa, voluptas saepe
              culpa provident dicta rem cumque fugiat rerum!
            </p>


           <p className="ml-10 pt-9 ">  <span className=" bg-gray-300 rounded-full py-2  ">
  <FontAwesomeIcon icon={faUser} className="text-gray-600 px-3" />
</span>
Rahi chauhan </p>
  
      <p className=" mt-9 font-medium ml-11 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi
              vitae officia odio exercitationem obcaecati deleniti, animi dolore
              suscipit aperiam. Veritatis sapiente quidem officiis corrupti
              incidunt consequuntur, error, doloribus temporibus alias quasi
              optio aut quis obcaecati adipisci dolore, dolorem nostrum ad
              maiores molestias soluta. Nihil nulla veritatis consequuntur
              rerum, earum similique sed a atque necessitatibus perspiciatis
              cumque corrupti dolorem. 
             
               
            </p>
         
          
          </div>
          <div className=" mr-[20%] mt-20 ">
            <Image src="/image1.jpg" alt="omg!!" width={2000} height={2000} />
          </div>
         
        </div>

        <Card />
        
           
      </div>
      {/* <div className="flex flex-col">
      
      </div> */}
    </>
  );
};

export default page;
