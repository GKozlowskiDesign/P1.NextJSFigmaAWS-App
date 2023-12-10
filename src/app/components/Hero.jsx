'use client';

import React from "react";
import { Link } from "react-scroll";
const Hero = () => {
  return (
        <div name="hero" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center h-screen md:h-full  pt-10 bg-black w-12/12">
                        <div className="grid grid-cols-1 md:grid-cols-2 "> 
                            <div className="cols-span-1 justify-left md:pb-20 pt-4 md:mb-0 md:mt-10 bg-transparent  w-full ">
                                            <div className="w-full md:w-3/3 mx-auto p-2">
                                            <h1 className="flex justify-left pl-5 w-full items-center mx-auto text-lg md:text-xl font-semibold text-gray-300 md:text-green-400 border-l-4 border-green-400 font-monument-extended"> Metaverse Of Things</h1>
                                            <h4 className="flex justify-left pl-5 items-center mx-auto tracking-wideer text-3xl md:text-6xl text-gray-300 mt-4 md:text-gray-300 font-semibold border-l-4 border-green-400 font-monument-extended"> 
                                            Secure
                                            <br></br>Decentralized
                                            <br></br>Quantum
                                            <br></br>Solutions
                                            </h4>     
                                            </div>
                                            

                                            <div className="grid grid-cols-2 w-full md:w-3/3 mx-auto p-1 pl-6 pt-4">

                                            <div className="w-3/3 md:w-3/3 flex justify-center items-center hover:rounded-3xl duration-700 bg-gradient-to-tr from-green-900 via-green-500 to-lime-200 rounded-md hover:bg-green-600 md:mt-4 cursor-pointer shadow-lg shadow-green-600">

                                            <Link activeClass="active" to="about" smooth duration={300}>
                                                  <h2 className="text-sm p-2 justify-center items-center text-white md:text-white font-monument-extended">Get Started</h2>
                                            </Link>     

                                            </div>
                                           
                                                                            
                                            </div>
                            </div>
                        </div>

                      <div className="col-span-1">
                      <div className="grid grid-cols-2 md:grid-cols-4 md:pt-4 pb-4 gap-4 md:gap-2">
                        <div className="cols-span-1 items-center justify-center flex">
                        <div>
                          <h1 className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400 justify-center flex font-monument-extended">100<span className="text-2xl md:text-3xl md:pt-0">K</span>+</h1>
                          <p className="pt-1 font-semibold text-gray-500 justify-center flex font-monument-extended">Devices</p>
                          </div>
                        </div>
                        
                        <div className="cols-span-1 items-center justify-center flex">
                        <div>
                        <h1 className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400  justify-center flex font-monument-extended">70<span className="text-2xl md:text-3xl md:pt-0">M</span>+</h1>
                        <p className="pt-1 font-semibold text-gray-500 justify-center flex font-monument-extended">Transactions</p>
                        </div>
                        </div>

                        <div className="cols-span-1 items-center justify-center flex">
                          <div>
                          <h1 className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400 justify-center flex font-monument-extended">200<span className="text-2xl md:text-3xl md:pt-0">K</span>+</h1>
                          <p className="pt-1 font-semibold text-gray-500 justify-center flex font-monument-extended">Community</p>
                          </div>
                        </div>

                        <div className="cols-span-1 items-center justify-center flex">
                        <div>
                        <h1 className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400 justify-center flex font-monument-extended">50<span className="text-2xl md:text-3xl md:pt-0">K</span>+</h1>
                        <p className="pt-1 font-semibold text-gray-500 justify-center flex font-monument-extended">Stakers</p>
                          </div>
                        </div>

                      </div>

                      </div>
                    
                   
               

        </div>
    )
};

export default Hero;