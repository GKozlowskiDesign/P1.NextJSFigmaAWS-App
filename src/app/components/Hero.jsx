'use client';

import React from "react";
import { Link } from "react-scroll";
import Image from 'next/image';
const Hero = () => {
  return (
        <div name="hero" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center h-screen md:pt-0 rounded-t-3xl border-b-2 border-t-4 border-black bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900">
                        <div className="cols-span-1 justify-left pb-10 pt-10 bg-transparent md:bg-white md:rounded-r-3xl md:rounded-bl-xl md:border-t-4 md:border-2 md:shadow-2xl w-full">
                                        <section className="w-full md:w-2/3 mx-auto p-1">
                                        <h3 className="flex justify-left pl-5  items-center mx-auto text-2xl font-light text-indigo-800">Offical Website</h3>
                                        <h1 className="flex justify-left pl-4 items-center mx-auto text-8xl font-semibold text-indigo-800"> Metaverse <br></br>Of Things</h1>
                                        <h4 className="flex justify-left pl-5 items-center mx-auto text-2xl text-indigo-800 mt-4">Join us in shaping the future of technology.</h4>
                                        </section>
                                        

                                        <div className="grid grid-cols-2 w-full md:w-2/3 mx-auto p-1 pl-6 pt-4">

                                        <div className="w-2/3 flex justify-center items-center bg-transparent border-t-4 border-2 border-indigo-900 rounded-md hover:bg-indigo-600 cursor-pointer">

                                        <Link activeClass="active" to="about" smooth duration={300}>
                                               <h2 className="text-xl p-2 justify-center items-center text-indigo-900">Community</h2>
                                        </Link>     

                                        </div>
                                        <div className="hidden w-full flex justify-center items-center md:w-4/5 mr-10 bg-transparent border-indigo-900 cursor-pointer">

                                        <Link activeClass="active" to="about" smooth duration={300}>
                                        <h2 className="text-xl pt-4  text-indigo-900 underline hover:font-bold hover:text-indigo-600">Explore the Community</h2>
                                        </Link>     

                                        </div>
                                                                        
                                        </div>
                        </div>
                    
                   
               

        </div>
    )
};

export default Hero;