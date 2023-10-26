import React from "react";
import Image from 'next/image';
const Hero = () => {
  return (
        <div className="grid grid-col-1 items-center h-screen pt-36 md:h-max md:pt-48 md:pb-96 mt-0 rounded-3xl border-8 border-white bg-gradient-to-b from-black via-gray-950 to-indigo-900  justify-center">
                <div className="justify-center flex items-center">
                                <Image
                                className="flex justify-center items-center mx-auto pt-20 mb-14 sm:pt-64 md:pt-48"
                                src="/favicon.png"
                                alt="Metaverse-Of-Things"
                                width={500}
                                height={40}
                                priority
                                />
                        </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 pt-4 md:pt-3 mx-auto text-white hover:text-indigo-700 duration-700 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
        </div>
    )
};

export default Hero;