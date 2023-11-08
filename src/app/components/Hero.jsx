'use client';

import React from "react";
import { Link } from "react-scroll";
import Image from 'next/image';
const Hero = () => {
  return (
        <div name="hero" className="grid grid-col-1 items-center h-screen pt-36 md:h-max md:pt-48 md:pb-80 mt-0 rounded-t-3xl border-b-4 border-black bg-gradient-to-b from-black via-gray-950 to-indigo-900  justify-center">
                <div className="justify-center flex items-center pb-32 pt-20 sm:pt-64 md:pt-48">
                                <Image
                                className="flex justify-center items-center mx-auto mb-0"
                                src="/favicon.png"
                                alt="Metaverse-Of-Things"
                                width={500}
                                height={40}
                                priority
                                />
                        </div>
                        <div className="flex justify-center text-center">


                        </div>
                <Link activeClass="active" className="bg-transparent p-0.5 pt-4 pb-4  mt-4 mb-4 mx-auto rounded-3xl border border-black hover:bg-black shadow-2xl cursor-pointer" to="about" smooth duration={300}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-7 p-1 rounded-3xl mx-auto text-white cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
                </Link>

        </div>
    )
};

export default Hero;