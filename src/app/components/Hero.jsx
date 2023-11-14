'use client';

import React from "react";
import { Link } from "react-scroll";
const Hero = () => {
  return (
        <div name="hero" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center h-screen md:h-full md:pt-0 rounded-tr-3xl bg-black w-12/12 mb-10">
                        <div className="grid grid-cols-2 "> 
                            <div className="cols-span-1 justify-left pb-10 pt-4 md:mb-20 md:mt-10 bg-transparent  w-full ">
                                            <div className="w-full md:w-3/3 mx-auto p-2">
                                            <h1 className="flex justify-left pl-5 w-full items-center mx-auto text-lg md:text-xl font-semibold text-indigo-300 md:text-white border-l-4 border-violet-700"> Metaverse Of Things</h1>
                                            <h4 className="flex justify-left pl-5 items-center mx-auto text-xl md:text-7xl text-indigo-300 mt-4 md:text-white font-semibold border-l-4 border-green-400">For shaping the next generation of internet technology.</h4>
                                            <p className="text-xs md:text-md pl-5 pt-4 lg:text-lg tracking-wider mb-4 border-l-4 text-gray-400 border-green-400">The MetverseOfThings (MVoT) is a pioneering company at the forefront of blockchain research and deployment, firmly rooted in the practical applications of this groundbreaking technology in the real world. </p>     
                                            </div>
                                            

                                            <div className="grid grid-cols-2 w-full md:w-3/3 mx-auto p-1 pl-6 pt-4">

                                            <div className="w-3/3 md:w-3/3 flex justify-center items-center bg-violet-600 border-t-4 border-2 border-indigo-300 md:border-indigo-900 rounded-md hover:bg-indigo-600 cursor-pointer">

                                            <Link activeClass="active" to="about" smooth duration={300}>
                                                  <h2 className="text-lg: md:text-xl p-2 justify-center items-center text-indigo-300 md:text-white">Get Started</h2>
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
                      <div className="w-full h-px bg-indigo-600  my-4 opacity-50"></div>
                      <div className="grid grid-cols-4 pt-4 pb-1">
                        <div className="cols-span-1 items-center justify-center flex">
                        <div>
                          <h1 className="text-4xl text-white">22,918</h1>
                          <p className="pt-1 font-semibold text-green-400">Devices</p>
                          </div>
                        </div>
                        
                        <div className="cols-span-1 items-center justify-center flex">
                        <div>
                          <h1 className="text-4xl text-white">70,481,232</h1>
                          <p className="pt-1 font-semibold text-green-400">Transactions</p>
                        </div>
                        </div>

                        <div className="cols-span-1 items-center justify-center flex">
                          <div>
                          <h1 className="text-4xl text-white">200k+</h1>
                          <p1 className="pt-1 font-semibold text-green-400">Community</p1>
                          </div>
                        </div>

                        <div className="cols-span-1 items-center justify-center flex">
                        <div>
                          <h1 className="text-4xl text-white">48,900</h1>
                          <p className="pt-1 font-semibold text-green-400">Stakers</p>
                          </div>
                        </div>

                      </div>

                      </div>
                    
                   
               

        </div>
    )
};

export default Hero;