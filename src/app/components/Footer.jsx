'use client';


import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
const Footer = () => {
    return (
        
      <footer name="footer" className="bg-gradient-to-tl from-gray-900 to-black border-t-2 border-gray-600 text-white py-2 pt-24">
            <section class="bg-transparent">
                <div
                      class="max-w-lg bg-transparent px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center"
                    >
                      <h1
                        class="text-3xl font-extrabold leading-10 tracking-tight text-white text-center sm:leading-none md:text-6xl lg:text-7xl"
                      >
                        <span class="inline md:block pb-2">Join Us</span>

                        <span
                          class=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block"
                        > We are<span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300"> Hiring</span> </span>
                      </h1>
                      <div
                        class="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg"
                      >
                        <button class="bg-tkb border text-sm text-white py-3 px-7 rounded-full">
                        Join MVoT
                        </button>
                      </div>
                    </div>
            </section>
            
            <div class="bg-transparent pb-5">
                <div class="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
                  <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="flex justify-center text-teal-300 sm:justify-start">
                    </div>

                    <p class="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                      T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto items-center justify-center p-0 grid grid-cols-6">
                <div className="col-span-5 justify-start opacity-100">        
                  <div className="justify-start">
                                        <Image
                                        className="justify-start mb-0 mr-2 hover:bg-indigo-700"
                                        src="/assets/MVoTLogo.png"
                                        alt="Metaverse-Of-Things"
                                        width={100}
                                        height={40}
                                        priority
                                        />
                  </div>
                </div>

            <div className="col-span-1 justify-end pl-0 mx-auto pb-2 pt-3">
            <Link activeClass="active" to="header" smooth duration={900}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 rounded-3xl cursor-pointer hover:bg-gray-400 bg-indigo-800 p-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </Link>
            </div>
          </div>
     

        <div className="w-full h-px bg-indigo-400  my-4 opacity-50"></div>
        <div className="w-full h-px bg-indigo-400  my-4 opacity-50"></div>
        <div className="w-full h-px bg-indigo-400  my-4 opacity-60"></div>
        <div className="w-full h-px bg-indigo-400  my-4 opacity-60"></div>
        <div className="w-full h-0.5 bg-indigo-400  my-4 opacity-60"></div>
        <div className="w-full h-0.5 bg-indigo-400  my-4 opacity-60"></div>
        <div className="w-full h-0.5 bg-indigo-400  my-4 opacity-60"></div>
        <div className="w-full h-0.5 bg-indigo-400  my-4 opacity-70"></div>
        <div className="w-full h-0.5 bg-indigo-400 my-4 opacity-70"></div>
        <div className="w-full h-0.5 bg-indigo-400  my-4 opacity-80"></div>
        <div className="w-full h-1 bg-indigo-400  my-4 opacity-80"></div>
        <div className="w-full h-1 bg-indigo-400  my-4 opactiy-80"></div>
        <div className="w-full h-1 bg-indigo-400  my-4 opacity-90"></div>
        <div className="w-full h-1.5 bg-indigo-400 my-4 opacity-90"></div>
        <div className="w-full h-1.5 bg-indigo-400  my-4 opacity-90"></div>
        <div className="w-full h-2 bg-indigo-400  my-4 opacity-90"></div>
        <div className="w-full h-2.5 bg-indigo-400  my-4 opacity-100"></div>
        <div className="w-full h-3 bg-indigo-400 my-4 opacity-100"></div>
        <div className="w-full h-3.5 bg-indigo-400 my-4 opacity-100"></div>
        <div className="w-full h-4 bg-indigo-400  my-4 opacity-100"></div>
        <div className="w-full h-4.5 bg-indigo-400 opacity-100"></div>
        <div className="w-full h-5 bg-indigo-400 opacity-100"></div>
      </footer>
    );
  };
  
  export default Footer;