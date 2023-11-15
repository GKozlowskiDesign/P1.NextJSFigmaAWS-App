'use client';

import React from "react";
import { Link } from "react-scroll";
const Hero = () => {
  return (
        <div name="hero" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center h-screen md:h-full md:pt-0 bg-black w-12/12 mb-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 "> 
                            <div className="cols-span-1 justify-left pb-4 pt-4 md:mb-20 md:mt-10 bg-transparent  w-full ">
                                            <div className="w-full md:w-3/3 mx-auto p-2">
                                            <h1 className="flex justify-left pl-5 w-full items-center mx-auto text-lg md:text-xl font-semibold text-indigo-300 md:text-white border-l-4 border-violet-700"> Metaverse Of Things</h1>
                                            <h4 className="flex justify-left pl-5 items-center mx-auto text-3xl md:text-7xl text-white mt-4 md:text-white font-semibold border-l-4 border-green-400">For shaping the next generation of internet technology.</h4>
                                            <p className="text-xs md:text-md pl-5 pt-4 lg:text-lg tracking-wider mb-4 border-l-4 text-gray-400 border-green-400">The MetverseOfThings (MVoT) is a pioneering company at the forefront of blockchain research and deployment, firmly rooted in the practical applications of this groundbreaking technology in the real world. </p>     
                                            </div>
                                            

                                            <div className="grid grid-cols-2 w-full md:w-3/3 mx-auto p-1 pl-6 pt-4">

                                            <div className="w-3/3 md:w-3/3 flex justify-center items-center bg-green-400 md:bg-violet-600 border-b-4 border-r-4 border-green-300 md:border-indigo-900 rounded-md hover:bg-green-200 md:hover:bg-indigo-600 cursor-pointer shadow-md md:shadow-indigo-800 shadow-green-800">

                                            <Link activeClass="active" to="about" smooth duration={300}>
                                                  <h2 className="text-lg: md:text-xl p-2 justify-center items-center text-black md:text-white">Get Started</h2>
                                            </Link>     

                                            </div>
                                            <div className="hidden w-full  justify-center items-center md:w-4/5 mr-10 bg-transparent border-indigo-900 cursor-pointer">

                                            <Link activeClass="active" to="about" smooth duration={300}>
                                            <h2 className="text-xl pt-4  text-indigo-900 underline hover:font-bold hover:text-indigo-600">Explore the Community</h2>
                                            </Link>     

                                            </div>
                                                                            
                                            </div>
                            </div>
                        </div>

                      <div className="col-span-1">
                      <div className="w-full h-px bg-green-400 md:bg-indigo-600  my-4 opacity-50"></div>
                      <div className="grid grid-cols-2 md:grid-cols-4 pt-4 pb-1">
                        <div className="cols-span-1 items-center justify-center flex">
                        <div>
                          <h1 className="text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400 justify-center flex">100<span className="text-2xl md:text-5xl md:pt-2">K</span>+</h1>
                          <p className="pt-1 font-semibold text-gray-500 justify-center flex">Devices</p>
                          </div>
                        </div>
                        
                        <div className="cols-span-1 items-center justify-center flex">
                        <div>
                        <h1 className="text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400 justify-center flex">70<span className="text-2xl md:text-5xl md:pt-2">M</span>+</h1>
                        <p className="pt-1 font-semibold text-gray-500 justify-center flex">Transactions</p>
                        </div>
                        </div>

                        <div className="cols-span-1 items-center justify-center flex">
                          <div>
                          <h1 className="text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400 justify-center flex">200<span className="text-2xl md:text-5xl md:pt-2">K</span>+</h1>
                          <p className="pt-1 font-semibold text-gray-500 justify-center flex">Community</p>
                          </div>
                        </div>

                        <div className="cols-span-1 items-center justify-center flex">
                        <div>
                        <h1 className="text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400 justify-center flex">50<span className="text-2xl md:text-5xl md:pt-2">K</span>+</h1>
                        <p className="pt-1 font-semibold text-gray-500 justify-center flex">Stakers</p>
                          </div>
                        </div>

                      </div>

                      </div>
                    
                   
               

        </div>
    )
};

export default Hero;