import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='flex flex-col border border-dark w-full items-center  border-solid blur_bg text-blue-700 p-6 rounded'>
            <div className='flex flex-row blur_bg  '>
                <nav className='flex flex-col blur_bg items-start relative right-[60%]'>
                    <div className='flex justify-center gap-2 text-xl'>
                        <h1 className='font-extrabold'>Quick Links</h1>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                    <div className='flex justify-center gap-2 text-xl'>
                        <h1 className='font-extrabold'>Site Map</h1>
                        <Link href="/">Blogs</Link>
                        <Link href="/about">Help</Link>
                        <Link href="/contact">Terms</Link>
                    </div>
     
                </nav>

                <div className='flex flex-col relative left-[60%]'>
                    <h1 className='font-extrabold text-xl'>Newsletter</h1>
                    <form className='flex flex-row gap-2'>
                        <input type="email" placeholder='Enter your email' className='font-light rounded py-1 px-2 border-2 border-blue-700' />
                        <button className="py-1 px-2 bg-blue-700 text-white font-light rounded cursor-pointer">Send</button>
                    </form>
                </div>

            </div>
            <div className='flex items-center font-extralight text-base blur_bg'>{new Date().getFullYear()}&copy; All Rights Reserved.</div>
        </footer>
    );
};

export default Footer;
