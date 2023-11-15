'use client';

import Image from 'next/image';
import React from "react";
import { Link } from "react-scroll";

const Services = () => {
  return (
        <section className="bg-transparent">
                <div id="services" className='flex flex-col w-full pt-2 md:pt-20 pb-20 md:pb-10  bg-gradient-to-b from-indigo-900 via-indigo-800 to-black shadow-xl'>
                    <div className="md:pt-10 md:pb-10 grid grid-cols-1 md:grid-cols-2 p-20">
                        <div className='justify-center items-center flex'>
                        <h1 className="text-5xl md:text-6xl font-semibold justify-center flex pl-20 text-white p-10" >Powerful Web3 PaaS LaunchPad Tooling</h1>

                        </div>



                        <div  className="col-span-1 justify-end hidden md:block">
                          <section className="md:visible w-8/12 md:w-full justify-center">
                          {/* external image */}
                          <img
                          src="https://images.pexels.com/photos/18069496/pexels-photo-18069496/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-the-potential-of-ai-for-society-through-3d-visualisations-it-was-created-by-novoto-studio-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="w-full rounded-3xl border-b-4 border-r-2 border border-white shadow-2xl mx-auto"
                          alt="Space"
                          />
                          </section>
                    
                    
                     <div className="w-3/3 md:w-3/3 flex justify-center items-center bg-green-400 md:bg-green-400 border-b-4 border-r-4 border-white md:border-green-600 rounded-md hover:bg-green-200 md:mt-4 cursor-pointer shadow-lg shadow-green-600">
                        <Link activeClass="active" to="about" smooth duration={300}>
                            <h2 className="text-lg: md:text-xl p-4 justify-center items-center text-black font-semibold">Explore MVoT Ecosystem</h2>
                        </Link>     
                        </div>

                      </div>  
                    </div> 

              
                  
                    <div className='grid grid-cols-2 md:grid-cols-4 p-20 gap-10'>


                    <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-4 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                            </svg>
                            
                            </div>
                            </div>
                            
                            <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-2 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>

                            </div>
                            </div>
                            
                            <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-2 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                            </svg>

                            </div>
                            </div>
                            
                            <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-2 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                            </svg>

                            </div>
                            </div>

                            <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-2 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                            </svg>

                            </div>
                            </div>

                            <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-2 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>

                            </div>
                            </div>

                            <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-2 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>

                            </div>
                            </div>

                            <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-2 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>

                            </div>
                            </div>

                            <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-2 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                            </svg>

                            </div>
                            </div>

                            <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-2 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                            </svg>

                            </div>
                            </div>

                            <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-2 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>

                            </div>
                            </div>

                            <div class="p-4 w-full md:w-2/3 pb-8 pt-8 overflow-hidden shadow-2xl mx-auto items-center justify-center flex border-b-4 border-r-2 border-2 bg-gradient-to-t from-zinc-900 to-gray-700 cursor-pointer border-zinc-600 rounded-2xl hover:border-green-400">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                            </svg>

                            </div>
                            </div>


                      
                       
                    </div>

                  
                </div>

               
             
        </section>
    )
};

export default Services;