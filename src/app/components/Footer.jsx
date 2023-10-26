'use client';


import React from "react";
import { Link } from "react-scroll";
const Footer = () => {
    return (
        
      <footer name="footer" className="bg-black text-white py-2 pt-64 p-1">
        <div className="container mx-auto flex justify-between items-center pb-40 p-3">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h2 className="text-xl font-bold">Company</h2>
            <ul className="mt-2">
              <li className="mb-2"><a className="hover:text-violet-400" href="#">About Us</a></li>
              <li className="mb-2"><a className="hover:text-violet-400" href="#">Careers</a></li>
              <li className="mb-2"><a className="hover:text-violet-400" href="#">Blog</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h2 className="text-xl font-bold">Resources</h2>
            <ul className="mt-2">
              <li className="mb-2"><a className="hover:text-violet-400" href="#">Docs</a></li>
              <li className="mb-2"><a className="hover:text-violet-400" href="#">API</a></li>
              <li className="mb-2"><a className="hover:text-violet-400" href="#">Support</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h2 className="text-xl font-bold">Community</h2>
            <ul className="mt-2">
              <li className="mb-2"><a className="hover:text-violet-400"href="#">Forums</a></li>
              <li className="mb-2"><a className="hover:text-violet-400" href="#">Partners</a></li>
              <li className="mb-2"><a className="hover:text-violet-400" href="#">Developers</a></li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto items-center justify-center p-2 grid grid-cols-6">
          <div className="col-span-4">        
            <h2 className="text-3xl text-white font-bold pt-2">MVoT 2023</h2>
          </div>

          <div className="col-span-2 justify-end pl-20 md:pl-72 mx-auto pb-2">
          <Link activeClass="active" to="header" smooth duration={900}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 rounded-3xl cursor-pointer hover:bg-violet-400 bg-indigo-700 p-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </Link>

          </div>
            
          </div>
            <div className="border-t">
                <div className="container mx-auto flex justify-between items-center pb-20 p-2">
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
                            <ul className="mt-2">
                            <li className="mb-2"><a className="hover:text-violet-400" href="#">Terms</a></li>
                            <li className="mb-2"><a className="hover:text-violet-400" href="#">Policies</a></li>
                            <li className="mb-2"><a className="hover:text-violet-400" href="#">Guidelines</a></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4"></div>
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4"></div>
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4"></div>
                </div>
            </div>
     

        <div className="w-full h-px bg-white  my-4 opacity-40"></div>
        <div className="w-full h-px bg-white  my-4 opacity-40"></div>
        <div className="w-full h-px bg-white  my-4 opacity-50"></div>
        <div className="w-full h-px bg-white  my-4 opacity-50"></div>
        <div className="w-full h-0.5 bg-white  my-4 opacity-50"></div>
        <div className="w-full h-0.5 bg-white  my-4 opacity-60"></div>
        <div className="w-full h-0.5 bg-white  my-4 opacity-60"></div>
        <div className="w-full h-0.5 bg-white  my-4 opacity-70"></div>
        <div className="w-full h-0.5 bg-white my-4 opacity-70"></div>
        <div className="w-full h-0.5 bg-white  my-4 opacity-80"></div>
        <div className="w-full h-1 bg-white  my-4 opacity-80"></div>
        <div className="w-full h-1 bg-white  my-4 opactiy-80"></div>
        <div className="w-full h-1 bg-white  my-4 opacity-90"></div>
        <div className="w-full h-1.5 bg-white my-4 opacity-90"></div>
        <div className="w-full h-1.5 bg-white  my-4 opacity-90"></div>
        <div className="w-full h-2 bg-white  my-4 opacity-90"></div>
        <div className="w-full h-2.5 bg-white  my-4 opacity-100"></div>
        <div className="w-full h-3 bg-white my-4 opacity-100"></div>
        <div className="w-full h-3.5 bg-white my-4 opacity-100"></div>
        <div className="w-full h-4 bg-white  my-4 opacity-100"></div>
        <div className="w-full h-4.5 bg-white opacity-100"></div>
        <div className="w-full h-5 bg-white opacity-100"></div>
      </footer>
    );
  };
  
  export default Footer;