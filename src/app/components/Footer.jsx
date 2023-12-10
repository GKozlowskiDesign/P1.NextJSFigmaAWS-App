'use client';


import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
const Footer = () => {
    return (
        
      <footer name="footer" className="bg-black text-white  pt-24 pb-40">
           
            
            <div class="bg-black pb-4 rounded-t-3xl shadow-2xl">
                <div class="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
                  <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="flex justify-center text-teal-300 sm:justify-start">
                    </div>

                
                  </div>
                </div>

           
            <div className="mx-auto items-center justify-center p-0 grid grid-cols-6">
               {/* 
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
            */} 

            <div className="col-span-1 justify-end pl-0 mx-auto pb-2 pt-3">
            <Link activeClass="active" to="header" smooth duration={900}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 rounded-3xl cursor-pointer border border-gray-900 hover:shadow-2xl hover:shadow-green-400 p-3 text-white duration-1000">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </Link>
            </div>
          </div>

        </div>

      </footer>
    );
  };
  
  export default Footer;