'use client';

import React from "react";
import { Link } from "react-scroll";
const Hero = () => {
  return (
        <div name="hero" className="grid grid-cols-1 items-center h-screen md:h-full   bg-black w-12/12">
                        <div className="grid grid-cols-1 items-center justify-center mx-auto h-screen"> 
                            <div className="cols-span-1 justify-left md:mb-40  bg-transparent  w-full ">
                                            <div className="w-full mx-auto">
                                            <h1 className="text-center mx-auto justify-center w-full
                                            items-center text-6xl font-semibold 
                                            text-gray-300 md:text-white 
                                            font-monument-extended flex">MVoT</h1>
                                            <h4 className="w-9/12 text-center mx-auto p-4  items-center text-xl font-thin text-gray-600">
                                              MVoT aims to be the catalyst for mainstream adoption of IoT and blockchain technologies.</h4>
                                            
                                            </div>
                                            

                                   
                            </div>
                        </div>

                   
               

        </div>
    )
};

export default Hero;