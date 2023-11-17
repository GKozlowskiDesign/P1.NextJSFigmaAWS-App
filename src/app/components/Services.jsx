'use client';

import Image from 'next/image';
import React from "react";
import { Link } from "react-scroll";

const Services = () => {
  return (
        <section id="services"  className="bg-transparent">

                <div className="cols-span-1 p-10 bg-black rounded-t-3xl">                                                  
                    <h1 className="text-4xl lg:text-5xl justify-center flex text-center text-white font-monument-extended">Made For Mass Adoption</h1>
                </div>

                <div className="bg-gradient-to-b from-black to-indigo-900 pt-10 grid grid-cols-1 md:grid-cols-2 pb-20 p-10 gap-4">
                    <div className="cols-span-1">
                    <div className="bg-black opacity-80 border-2 border-gray-600 rounded-3xl pt-4 pb-4 grid grid-cols-1 h-full shadow-2xl shadow-indigo-600">
                            <div className="p-3"><h1 className="justify-start pl-2 mx-auto text-xl border-l-4 border-teal-400 text-white font-semibold  font-monument-extended">Infrastructure</h1></div>
                            <div className="p-3"><p className="justify-start pl-2 mx-auto text-md text-gray-400">Focus on innovation and speed to market with fully managed blockchain infrastructure, utilize compute, storage, and networking solutions with MVoT.</p></div> 
                    </div>
                    </div>

                    <div className="cols-span-1">
                    <div className="bg-black opacity-80 border-2 border-gray-600 rounded-3xl pt-4 pb-4 grid grid-cols-1 h-full shadow-2xl shadow-indigo-600">
                            <div className="p-3"><h1 className="justify-start pl-2 mx-auto text-xl border-l-4 border-yellow-400 text-white font-semibold  font-monument-extended">Tokenization</h1></div>
                            <div className="p-3"><p className="justify-start pl-2 mx-auto text-md text-gray-400">MVoT Non-Fungible Tokens solutions on MVoT let users build workloads to mint and manage digital assets like NFTs. This removes some of the challenges involved in protecting the assets.</p></div> 
                            </div>
                    </div>

                    <div className="cols-span-1">
                    <div className="bg-black opacity-80 border-2 border-gray-600 rounded-3xl pt-4 pb-4 grid grid-cols-1 h-full shadow-2xl shadow-indigo-600">
                            <div className="p-3"><h1 className="justify-start pl-2 mx-auto text-xl border-l-4 border-violet-400 text-white font-semibold  font-monument-extended">Analytics</h1></div>
                            <div className="p-3"><p className="justify-start pl-2 mx-auto text-md text-gray-400">MVoT Analytics services allow you to inspect, identify, understand, and visualize data on the blockchain, so you can monitor your data and adapt to changes.</p></div> 

                    </div>
                    </div>

                    <div className="cols-span-1">
                    <div className="bg-black opacity-80 border-2 border-gray-600 rounded-3xl pt-4 pb-4 grid grid-cols-1 h-full shadow-2xl shadow-indigo-600">
                            <div className="p-3"><h1 className="justify-start pl-2 mx-auto text-xl border-l-4 border-green-400 text-white font-semibold  font-monument-extended">Governance</h1></div>
                            <div className="p-3"><p className="justify-start pl-2 mx-auto text-md text-gray-400">MVoT Node Deployment and Management solutions on MVoT can help you deploy and configure your Layer 1 and Layer 2 blockchain peer nodes as well as create Wallets.</p></div> 
                    </div> 
                    </div>
                </div>

                <div className='flex flex-col w-full pt-10 md:pt-20 pb-20 md:pb-10  bg-gradient-to-b from-indigo-900 via-indigo-800 to-black shadow-2xl shadow-gray-900 p-10 rounded-b-3xl'>
                    <div className="md:pt-10 md:pb-10 grid grid-cols-1 md:grid-cols-2 p-4">
                        
                          <div className='justify-center items-center flex pb-10'>
                            <h1 className="text-4xl md:text-6xl font-semibold justify-center flex text-white font-monument-extended" >Powerful Web3 PaaS LaunchPad Tooling</h1>
                          </div>

                          <div  className="col-span-1 justify-end">
                              <section className="w-full md:w-full justify-center pb-4">
                                <img
                                src="https://images.pexels.com/photos/18069496/pexels-photo-18069496/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-the-potential-of-ai-for-society-through-3d-visualisations-it-was-created-by-novoto-studio-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="w-full rounded-3xl border-b-4 border-r-2 border border-black shadow-2xl mx-auto"
                                alt="Space"
                                />
                              </section>
                          
                          <div className="w-3/3 md:w-3/3 flex justify-center items-center bg-green-400 md:bg-green-400 border-b-4 border-r-4 border-black md:border-green-600 rounded-md hover:bg-green-600 md:mt-4 cursor-pointer shadow-lg shadow-green-600">
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