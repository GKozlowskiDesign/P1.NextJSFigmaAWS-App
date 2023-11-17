'use client';


import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
const Footer = () => {
    return (
        
      <footer name="footer" className="bg-gradient-to-t from-gray-900 to-black border-t-2 border-gray-600 text-white py-2 pt-24 rounded-3xl">
           
            
            <div class="bg-transparent pb-20">
                <div class="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
                  <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="flex justify-center text-teal-300 sm:justify-start">
                    </div>

                
                  </div>
                </div>
              </div>

              <div className="mx-auto items-center justify-center p-0 grid grid-cols-6">
                <div className="col-span-5 justify-start opacity-100">        
                  <div className="justify-start">
                                        <Image
                                        className="justify-start mb-0 mr-2"
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 rounded-3xl cursor-pointer hover:bg-gray-400 bg-indigo-800 shadow-2xl shadow-indigo-600 p-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </Link>
            </div>
          </div>
     

        <div className="w-full h-px bg-indigo-600 mt-20 my-4 opacity-80 shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-px bg-indigo-600  my-4 opacity-80  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-px bg-indigo-600  my-4 opacity-80  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-px bg-indigo-600  my-4 opacity-80  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-0.5 bg-indigo-600  my-4 opacity-80  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-0.5 bg-indigo-600  my-4 opacity-90  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-0.5 bg-indigo-600  my-4 opacity-90  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-1 bg-indigo-600  my-4 opactiy-90  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-1 bg-indigo-600  my-4 opacity-90  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-1.5 bg-indigo-600 my-4 opacity-90  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-1.5 bg-indigo-600  my-4 opacity-90  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-2 bg-indigo-600  my-4 opacity-90  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-2.5 bg-indigo-600  my-4 opacity-100  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-3 bg-indigo-600 my-4 opacity-100  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-3.5 bg-indigo-600 my-4 opacity-100  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-4 bg-indigo-600  my-4 opacity-100  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-4.5 bg-indigo-600 opacity-100  shadow-2xl shadow-indigo-600"></div>
        <div className="w-full h-5 bg-indigo-600 opacity-100  shadow-2xl shadow-indigo-600"></div>
      </footer>
    );
  };
  
  export default Footer;