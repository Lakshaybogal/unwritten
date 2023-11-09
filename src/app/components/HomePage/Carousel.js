import React, { useState } from 'react'
const images = [
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner2-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner2-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg"
];

const Carousel = () => {
    const[current,SetCurrent]=useState(0);
    const NextSlide=()=>{
        SetCurrent(current=== images.length-1 ? 0:current+1);
    }
    const PrevSlide=()=>{
        SetCurrent(current===0 ?images.length-1 : current-1);
    }
  return (
    <div>
        <div className='flex justify-evenly items-center pl-5 pr-5 pb-5 h-screen'>

        
        <div className='left-arrow bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg cursor-pointer' onClick={PrevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

        </div>
        <div className='image'>
        {images.map(
                    (image, index) =>
                        current === index && (
                            <div key={image} className="slide flex justify-center">
                                <img className='w-[70%] rounded-2xl' src={image} alt="images" />
                               
                            </div>
                        )
                )}
        </div>
      
        <div className='right-arrow  bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg cursor-pointer'onClick={NextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

        </div>
    </div>
    </div>
  )
}

export default Carousel