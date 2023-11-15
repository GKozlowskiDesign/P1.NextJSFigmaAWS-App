'use client';

import Image from 'next/image';
import React from "react";
import { Link } from "react-scroll";

const Services = () => {
  return (
        <section className="bg-transparent">
                <div id="services" className='flex flex-col w-full pt-10 md:pt-20 pb-20 md:pb-10  bg-gradient-to-b from-indigo-900 via-indigo-800 to-black shadow-xl p-10'>
                 

              
                  
                    <div className='hidden md:grid grid-cols-6 md:grid-cols-6 p-4 gap-2 md:gap-4'>


                            <div class="grid grid-cols-1 p-4 w-full md:w-2/3 pb-4 pt-4 overflow-hidden shadow-2xl mx-auto items-center justify-center border-b-4 border-r-4 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                          
                            <h1 className='justify-center flex text-center text-white font-semibold text-xs md:text-lg'>Payments</h1>

                            </div>
                            
                            <div class="grid grid-cols-1 p-4 w-full md:w-2/3 pb-4 pt-4 overflow-hidden shadow-2xl mx-auto items-center justify-center border-b-4 border-r-4 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                          
                            <h1 className='justify-center flex text-center text-white font-semibold text-xs md:text-lg'>Systems</h1>

                            </div>
                            
                            <div class="grid grid-cols-1 p-4 w-full md:w-2/3 pb-4 pt-4 overflow-hidden shadow-2xl mx-auto items-center justify-center border-b-4 border-r-4 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                          
                            <h1 className='justify-center flex text-center text-white font-semibold text-xs md:text-lg'>Business</h1>

                            </div>

                            <div class="grid grid-cols-1 p-4 w-full md:w-2/3 pb-4 pt-4 overflow-hidden shadow-2xl mx-auto items-center justify-center border-b-4 border-r-4 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            
                            <h1 className='justify-center flex text-center text-white font-semibold text-xs md:text-lg'>Gaming</h1>

                            </div>


                            <div class="grid grid-cols-1 p-4 w-full md:w-2/3 pb-4 pt-4 overflow-hidden shadow-2xl mx-auto items-center justify-center border-b-4 border-r-4 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            
                            <h1 className='justify-center flex text-center text-white font-semibold text-xs md:text-lg'>DAOs</h1>

                            </div>


                            <div class="grid grid-cols-1 p-4 w-full md:w-2/3 pb-4 pt-4 overflow-hidden shadow-2xl mx-auto items-center justify-center border-b-4 border-r-4 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            
                            <h1 className='justify-center flex text-center text-white font-semibold text-xs md:text-lg'>NFT</h1>

                            </div>

                        


                      
                       
                    </div>



                    <div className="md:pt-10 md:pb-10 grid grid-cols-1 md:grid-cols-2 p-4">
                        <div className='justify-center items-center flex pb-10'>
                        <h1 className="text-4xl md:text-5xl font-semibold justify-center flex text-white" >Powerful Web3 PaaS LaunchPad Tooling</h1>

                        </div>



                        <div  className="col-span-1 justify-end">
                          <section className="w-full md:w-full justify-center pb-4">
                          {/* external image */}
                          <img
                          src="https://images.pexels.com/photos/18069496/pexels-photo-18069496/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-the-potential-of-ai-for-society-through-3d-visualisations-it-was-created-by-novoto-studio-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="w-full rounded-3xl border-b-4 border-r-2 border border-black shadow-2xl mx-auto"
                          alt="Space"
                          />
                          </section>
                    
                    
                     <div className="w-3/3 md:w-3/3 flex justify-center items-center bg-green-400 md:bg-green-400 border-b-2 border-r-2 border-black md:border-green-600 rounded-md hover:bg-green-200 md:mt-4 cursor-pointer shadow-lg shadow-green-600">
                        <Link activeClass="active" to="about" smooth duration={300}>
                            <h2 className="text-lg: md:text-xl p-4 justify-center items-center text-black font-semibold">Explore MVoT Ecosystem</h2>
                        </Link>     
                        </div>

                      </div>  
                    </div> 

                  
      </div>



               
             
        </section>
    )
};

export default Services;